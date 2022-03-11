// based on https://github.com/tengbao/vanta

import {
  PerspectiveCamera,
  WebGLRenderer,
  Scene,
  Group,
  LineSegments,
  Mesh,
  SphereGeometry,
  MeshLambertMaterial,
  SpotLight,
  Color,
  BufferGeometry,
  BufferAttribute,
  DynamicDrawUsage,
  LineBasicMaterial,
  AdditiveBlending,
  AmbientLight,
  Vector3,
} from "three";

import { debounce, throttle } from "../../utils";

import { mobileCheck, getBrightness, ri, clamp, clearThree } from "./helpers";

interface VantaOptions {
  minHeight: number;
  minWidth: number;
  color: number;
  backgroundColor: number;
  points: number;
  maxDistance: number;
  spacing: number;
  el: HTMLElement;
}

const apply = <T>(value: T | T[], fn: (value: T) => void): void => {
  if (Array.isArray(value)) {
    return value.forEach(fn);
  }
  return fn(value);
};

const requestIdleCallback = (fn: () => void) =>
  (window.requestIdleCallback || window.setTimeout)(fn);

export class Net {
  camera!: PerspectiveCamera;
  el!: HTMLElement;
  fps: unknown;
  height!: number;
  mouseX!: number;
  mouseY!: number;
  renderer = new WebGLRenderer({
    alpha: true,
    antialias: true,
  });
  req!: number;
  scene!: Scene;
  t!: number;
  t2!: number;
  uniforms: unknown;
  width!: number;

  blending: "additive" | "subtractive" = "additive";
  cont!: Group;
  lineColors!: Float32Array;
  linePositions!: Float32Array;
  linesMesh!: LineSegments;
  points: Array<Mesh<SphereGeometry, MeshLambertMaterial>> = [];
  rayCaster: unknown;
  rcMouseX?: number;
  rcMouseY?: number;
  spot!: SpotLight;

  options: VantaOptions;

  constructor(userOptions: Partial<VantaOptions> & { el: VantaOptions["el"] }) {
    this.options = {
      minHeight: 200,
      minWidth: 200,
      color: 0xff3f81,
      backgroundColor: 0x23153c,
      points: 10,
      maxDistance: 20,
      spacing: 15,
      ...userOptions,
    };

    this.el = this.options.el;

    requestIdleCallback(() => {
      this.initThree();

      requestIdleCallback(() => {
        this.setSize();

        requestIdleCallback(() => {
          this.init();
          this.initMouse();
          window.requestAnimationFrame(this.animationLoop);
          window.requestAnimationFrame(this.resize);
        });
      });
    });

    // Event listeners
    window.addEventListener("resize", this.resize);
    window.addEventListener(
      "scroll",
      this.windowMouseMoveWrapper as EventListener
    );
    window.addEventListener("mousemove", this.windowMouseMoveWrapper);
    window.addEventListener("touchstart", this.windowTouchWrapper);
    window.addEventListener("touchmove", this.windowTouchWrapper);
  }

  public destroy = () => {
    this.scene.remove(this.linesMesh);

    window.removeEventListener("touchstart", this.windowTouchWrapper);
    window.removeEventListener("touchmove", this.windowTouchWrapper);
    window.removeEventListener(
      "scroll",
      this.windowMouseMoveWrapper as EventListener
    );
    window.removeEventListener("mousemove", this.windowMouseMoveWrapper);
    window.removeEventListener("resize", this.resize);
    window.cancelAnimationFrame(this.req);

    clearThree(this.scene);
    this.el.removeChild(this.renderer.domElement);
  };

  public setOptions(userOptions: Partial<VantaOptions>) {
    this.options = { ...this.options, ...userOptions };
    this.triggerMouseMove();
    if (userOptions.color) {
      this.points.forEach((p) =>
        apply(
          p.material,
          (material) => (material.color = new Color(userOptions.color))
        )
      );
    }
  }

  initThree() {
    this.el.appendChild(this.getCanvasElement());
    Object.assign(this.getCanvasElement().style, {
      position: "absolute",
      zIndex: 0,
      top: 0,
      left: 0,
      background: "",
    });

    this.scene = new Scene();
  }

  private getCanvasElement() {
    return this.renderer.domElement; // three.js
  }

  private getCanvasRect() {
    return this.getCanvasElement().getBoundingClientRect();
  }

  private windowMoveWrapper = (clientX: number, clientY: number) => {
    const rect = this.getCanvasRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    if (x >= 0 && y >= 0 && x <= rect.width && y <= rect.height) {
      this.mouseX = x;
      this.mouseY = y;
    }
  };

  private windowMouseMoveWrapper = (e: MouseEvent) => {
    this.windowMoveWrapper(e.clientX, e.clientY);
  };

  private windowTouchWrapper = (e: TouchEvent) => {
    if (e.touches.length === 1) {
      this.windowMoveWrapper(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  private triggerMouseMove = () => {
    const xNorm = this.mouseX / this.width;
    const yNorm = this.mouseY / this.height;
    this.onMouseMove(xNorm, yNorm);
  };

  private setSize() {
    this.width = Math.max(this.el.offsetWidth, this.options.minWidth);
    this.height = Math.max(this.el.offsetHeight, this.options.minHeight);
  }

  private initMouse() {
    this.mouseX = this.width / 2;
    this.mouseY = this.height / 2;
    this.triggerMouseMove();
  }

  private resize = debounce(() => {
    this.setSize();
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
  }, 300);

  private isOnScreen() {
    const elHeight = this.el.offsetHeight;
    const elRect = this.el.getBoundingClientRect();
    const scrollTop =
      window.pageYOffset ||
      (document.documentElement || document.body.parentNode || document.body)
        .scrollTop;
    const offsetTop = elRect.top + scrollTop;
    const minScrollTop = offsetTop - window.innerHeight;
    const maxScrollTop = offsetTop + elHeight;
    return minScrollTop <= scrollTop && scrollTop <= maxScrollTop;
  }

  private animationLoop = () => {
    // Step time
    this.t ??= 0;
    this.t += 1;
    // Uniform time
    this.t2 ??= 0;
    this.t2 += 1;

    if (this.isOnScreen()) {
      this.onUpdate();
      this.renderer.render(this.scene, this.camera);
      this.renderer.setClearColor(this.options.backgroundColor);
    }
    this.req = window.requestAnimationFrame(this.animationLoop);
  };

  private genPoint = (x: number, y: number, z: number) => {
    const geometry = new SphereGeometry(0.25, 12, 12); // radius, width, height
    const material = new MeshLambertMaterial({
      color: this.options.color,
    });
    const sphere = new Mesh(geometry, material);
    sphere.position.set(x, y, z);
    this.cont.add(sphere);
    this.points.push(sphere);
  };

  init = () => {
    this.cont = new Group();
    this.cont.position.set(0, 0, 0);
    this.scene.add(this.cont);

    const points = mobileCheck()
      ? Math.floor(this.options.points * 0.75)
      : this.options.points;
    const spacing = mobileCheck()
      ? Math.floor(this.options.spacing * 0.65)
      : this.options.spacing;

    const numPoints = points * points * 2;
    this.linePositions = new Float32Array(numPoints * numPoints * 3);
    this.lineColors = new Float32Array(numPoints * numPoints * 3);

    const colorB = getBrightness(new Color(this.options.color));
    const bgB = getBrightness(new Color(this.options.backgroundColor));
    this.blending = colorB > bgB ? "additive" : "subtractive";

    const geometry = new BufferGeometry();
    geometry.setAttribute(
      "position",
      new BufferAttribute(this.linePositions, 3).setUsage(DynamicDrawUsage)
    );
    geometry.setAttribute(
      "color",
      new BufferAttribute(this.lineColors, 3).setUsage(DynamicDrawUsage)
    );
    geometry.computeBoundingSphere();
    geometry.setDrawRange(0, 0);
    const material = new LineBasicMaterial({
      vertexColors: true,
      blending: this.blending === "additive" ? AdditiveBlending : undefined,
      transparent: true,
    });

    this.linesMesh = new LineSegments(geometry, material);
    this.cont.add(this.linesMesh);

    for (let i = 0; i < points; i++) {
      for (let j = 0; j < points; j++) {
        requestAnimationFrame(() => {
          const y = ri(-3, 3);
          const x = (i - points / 2) * spacing + ri(-5, 5);
          let z = (j - points / 2) * spacing + ri(-5, 5);
          if (i % 2) {
            z += spacing * 0.5;
          }

          this.genPoint(x, y - ri(5, 15), z);
          this.genPoint(x + ri(-5, 5), y + ri(5, 15), z + ri(-5, 5));
        });
      }
    }

    this.camera = new PerspectiveCamera(
      25,
      this.width / this.height,
      0.01,
      10000
    );
    this.camera.position.set(50, 100, 150);
    this.scene.add(this.camera);

    const ambience = new AmbientLight(0xffffff, 0.75);
    this.scene.add(ambience);

    this.spot = new SpotLight(0xffffff, 1);
    this.spot.position.set(0, 200, 0);
    this.spot.distance = 400;
    this.spot.target = this.cont;
    this.scene.add(this.spot);
  };

  onUpdate = () => {
    const c = this.camera;
    if (Math.abs(c.userData.tx - c.position.x) > 0.01) {
      const diff = c.userData.tx - c.position.x;
      c.position.x += diff * 0.02;
    }
    if (Math.abs(c.userData.ty - c.position.y) > 0.01) {
      const diff = c.userData.ty - c.position.y;
      c.position.y += diff * 0.02;
    }
    c.lookAt(new Vector3(0, 0, 0));

    let vertexpos = 0;
    let colorpos = 0;
    let numConnected = 0;

    const bgColor = new Color(this.options.backgroundColor);
    const color = new Color(this.options.color);
    const diffColor = color.clone().sub(bgColor);

    for (let i = 0; i < this.points.length; i++) {
      const p = this.points[i];
      p.scale.x = p.scale.y = p.scale.z = 1;

      const ang = Math.atan2(p.position.z, p.position.x);
      const dist = Math.sqrt(
        p.position.z * p.position.z + p.position.x * p.position.x
      );
      p.position.x = dist * Math.cos(ang);
      p.position.z = dist * Math.sin(ang);

      for (let j = i; j < this.points.length; j++) {
        const p2 = this.points[j];
        const dx = p.position.x - p2.position.x;
        const dy = p.position.y - p2.position.y;
        const dz = p.position.z - p2.position.z;
        const distIJ = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (distIJ < this.options.maxDistance) {
          const alpha = clamp(
            (1.0 - distIJ / this.options.maxDistance) * 2,
            0,
            1
          );

          const lineColor =
            this.blending === "additive"
              ? new Color(0x000000).lerp(diffColor, alpha)
              : bgColor.clone().lerp(color, alpha);

          this.linePositions[vertexpos++] = p.position.x;
          this.linePositions[vertexpos++] = p.position.y;
          this.linePositions[vertexpos++] = p.position.z;
          this.linePositions[vertexpos++] = p2.position.x;
          this.linePositions[vertexpos++] = p2.position.y;
          this.linePositions[vertexpos++] = p2.position.z;

          this.lineColors[colorpos++] = lineColor.r;
          this.lineColors[colorpos++] = lineColor.g;
          this.lineColors[colorpos++] = lineColor.b;
          this.lineColors[colorpos++] = lineColor.r;
          this.lineColors[colorpos++] = lineColor.g;
          this.lineColors[colorpos++] = lineColor.b;

          numConnected++;
        }
      }
    }
    this.linesMesh.geometry.setDrawRange(0, numConnected * 2);
    this.linesMesh.geometry.attributes.position.needsUpdate = true;
    this.linesMesh.geometry.attributes.color.needsUpdate = true;

    return this.t * 0.001;
  };

  onMouseMove = (x: number, y: number) => {
    const c = this.camera;
    const oy = typeof c.userData.oy === "number" ? c.userData.oy : c.position.y;
    const ox = typeof c.userData.ox === "number" ? c.userData.ox : c.position.x;
    const oz = typeof c.userData.oz === "number" ? c.userData.oz : c.position.z;
    c.userData.oy = oy;
    c.userData.ox = ox;
    c.userData.oz = oz;

    const ang = Math.atan2(oz, ox);
    const dist = Math.sqrt(oz * oz + ox * ox);
    const tAng = ang + (x - 0.5) * 2;
    c.userData.tz = dist * Math.sin(tAng);
    c.userData.tx = dist * Math.cos(tAng);
    c.userData.ty = oy + (y - 0.5) * 50;

    this.rcMouseX = x * 2 - 1;
    this.rcMouseY = -x * 2 + 1;
  };
}
