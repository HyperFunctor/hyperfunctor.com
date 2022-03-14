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

import { debounce } from "../../utils";

import { mobileCheck, getBrightness, ri, clamp, clearThree } from "./helpers";

interface VantaOptions {
  el: HTMLElement;
}

const requestIdleCallback = (fn: () => void) =>
  (window.requestIdleCallback || window.setTimeout)(fn);

export class Net {
  private renderer = new WebGLRenderer({
    alpha: true,
    antialias: true,
  });
  private camera!: PerspectiveCamera;
  private el!: HTMLElement;
  private height!: number;
  private mouseX!: number;
  private mouseY!: number;
  private req!: number;
  private scene!: Scene;
  private width!: number;
  private cont!: Group;
  private lineColors!: Float32Array;
  private linePositions!: Float32Array;
  private linesMesh!: LineSegments;
  private points: Array<Mesh<SphereGeometry, MeshLambertMaterial>> = [];
  private spot!: SpotLight;
  private options: VantaOptions;
  private backgroundColor = new Color(0x1f2937);
  private color = new Color(0xec4899);
  private diffColor = this.color.clone().sub(this.backgroundColor);
  private maxDistance = 0;
  private maxDistanceIncreasing = true;
  private t = 0;

  constructor(userOptions: Partial<VantaOptions> & { el: VantaOptions["el"] }) {
    this.options = {
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
          window.requestAnimationFrame(this.resizeNOW);
        });
      });
    });

    // Event listeners
    window.addEventListener("resize", this.resize);
    window.addEventListener("mousemove", this.windowMouseMoveWrapper);
  }

  public destroy = () => {
    this.scene.remove(this.linesMesh);

    window.removeEventListener("mousemove", this.windowMouseMoveWrapper);
    window.removeEventListener("resize", this.resize);
    window.cancelAnimationFrame(this.req);

    clearThree(this.scene);
    this.el.removeChild(this.renderer.domElement);
  };

  public setOptions(userOptions: Partial<VantaOptions>) {
    this.options = { ...this.options, ...userOptions };
    this.triggerMouseMove();
  }

  initThree() {
    this.el.appendChild(this.getCanvasElement());
    Object.assign(this.getCanvasElement().style, {
      position: "absolute",
      zIndex: 0,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
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

  private windowMouseMoveWrapper = (e: MouseEvent) => {
    const rect = this.getCanvasRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (x >= 0 && y >= 0 && x <= rect.width && y <= rect.height) {
      this.mouseX = x;
      this.mouseY = y;
    }
    this.triggerMouseMove();
  };

  private triggerMouseMove = () => {
    const xNorm = this.mouseX / this.width;
    const yNorm = this.mouseY / this.height;
    this.onMouseMove(xNorm, yNorm);
  };

  private setSize() {
    this.width = Math.max(this.el.offsetWidth, window.innerWidth);
    this.height = Math.max(this.el.offsetHeight, window.innerHeight);
  }

  private initMouse() {
    this.mouseX = this.width / 2;
    this.mouseY = this.height / 2;
    this.triggerMouseMove();
  }

  private resizeNOW = () => {
    this.setSize();
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
  };

  private resize = debounce(this.resizeNOW, 300);

  private animationLoop: FrameRequestCallback = (now) => {
    // update maxDistance
    if (this.t !== 0) {
      const elapsedMS = now - this.t;
      const intervalMS = 166;
      const changeOfMaxDistance = elapsedMS / intervalMS;

      if (this.maxDistanceIncreasing) {
        this.maxDistance += changeOfMaxDistance;
      } else {
        this.maxDistance -= changeOfMaxDistance;
      }

      if (this.maxDistance <= 0) {
        this.maxDistanceIncreasing = true;
      } else if (this.maxDistance >= 47) {
        this.maxDistanceIncreasing = false;
      }
    }
    this.t = now;

    this.onUpdate();
    this.renderer.render(this.scene, this.camera);
    this.renderer.setClearColor(this.backgroundColor);
    this.req = window.requestAnimationFrame(this.animationLoop);
  };

  private genPoint = (x: number, y: number, z: number) => {
    const geometry = new SphereGeometry(0.25, 12, 12); // radius, width, height
    const material = new MeshLambertMaterial({
      color: this.color,
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

    const basePoints = Math.floor(Math.random() * 10 + 10 / 2);
    const baseSpacing = Math.floor(Math.random() * 15 + 15 / 2);

    const points = mobileCheck() ? Math.floor(basePoints * 0.75) : basePoints;
    const spacing = mobileCheck()
      ? Math.floor(baseSpacing * 0.65)
      : baseSpacing;

    const numPoints = points * points * 2;
    this.linePositions = new Float32Array(numPoints * numPoints * 3);
    this.lineColors = new Float32Array(numPoints * numPoints * 3);

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
      blending: AdditiveBlending,
      transparent: true,
    });

    this.linesMesh = new LineSegments(geometry, material);
    this.cont.add(this.linesMesh);

    for (let i = 0; i < points; i++) {
      for (let j = 0; j < points; j++) {
        requestAnimationFrame(() => {
          const y = ri(-5, 5);
          const x = (i - points / 2) * spacing + ri(-5, 5);
          const z = (j - points / 2) * spacing + ri(-5, 5);

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
    const diffX = c.userData.tx - c.position.x;
    if (Math.abs(diffX) > 0.01) {
      c.position.x += diffX * 0.02;
    }
    const diffY = c.userData.ty - c.position.y;
    if (Math.abs(diffY) > 0.01) {
      c.position.y += diffY * 0.02;
    }
    c.lookAt(new Vector3(0, 0, 0));

    if (!this.maxDistance) {
      return;
    }

    let vertexpos = 0;
    let colorpos = 0;
    let numConnected = 0;

    for (let i = 0; i < this.points.length; ++i) {
      const p1 = this.points[i];
      for (let j = i + 1; j < this.points.length; ++j) {
        const p2 = this.points[j];
        const distIJ = p1.position.distanceTo(p2.position);

        if (distIJ >= this.maxDistance) {
          continue;
        }

        const alpha = clamp(1.0 - distIJ / this.maxDistance, 0, 1);

        const lineColor = new Color(0x000000).lerp(this.diffColor, alpha);

        this.linePositions[vertexpos++] = p1.position.x;
        this.linePositions[vertexpos++] = p1.position.y;
        this.linePositions[vertexpos++] = p1.position.z;
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

    this.linesMesh.geometry.setDrawRange(0, numConnected * 2);
    this.linesMesh.geometry.attributes.position.needsUpdate = true;
    this.linesMesh.geometry.attributes.color.needsUpdate = true;
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
  };
}
