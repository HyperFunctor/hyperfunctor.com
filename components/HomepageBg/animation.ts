/* eslint-disable */
// @ts-ignore
// based on https://github.com/tengbao/vanta

import * as THREE from "three";

import {
  mobileCheck,
  q,
  color2Hex,
  clearThree,
  getBrightness,
  ri,
  rn,
  clamp,
} from "./helpers";

const error = (...args: unknown[]) => console.error(...args);

interface VantaOptions {
  mouseControls: boolean;
  touchControls: boolean;
  gyroControls: boolean;
  minHeight: number;
  minWidth: number;
  scale: number;
  scaleMobile: number;
  color: number;
  backgroundColor: number;
  points: number;
  maxDistance: number;
  spacing: number;
  el?: keyof HTMLElementTagNameMap | HTMLElement;
  showDots: boolean;
  backgroundAlpha?: number;
  mouseEase?: boolean;
  speed?: number;
  forceAnimate?: boolean;
}

class VantaBase {
  afterRender: unknown;
  camera!: THREE.PerspectiveCamera;
  el!: HTMLElement;
  fps: unknown;
  height!: number;
  mouseEaseX!: number;
  mouseEaseY!: number;
  mouseX!: number;
  mouseY!: number;
  onDestroy: unknown;
  onInit: unknown;
  onMouseMove?: (xNorm: number, yNorm: number) => void;
  onResize: unknown;
  onRestart: unknown;
  onUpdate: unknown;
  renderer!: THREE.WebGLRenderer;
  req!: number;
  scale!: number;
  scene!: THREE.Scene;
  t!: number;
  t2!: number;
  uniforms: unknown;
  width!: number;
  options: Partial<VantaOptions> = {
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200,
    minWidth: 200,
    scale: 1,
    scaleMobile: 1,

    color: 0xff3f81,
    backgroundColor: 0x23153c,
    points: 10,
    maxDistance: 20,
    spacing: 15,
    showDots: true,
  };

  constructor(userOptions = {}) {
    this.windowMouseMoveWrapper = this.windowMouseMoveWrapper.bind(this);
    this.windowTouchWrapper = this.windowTouchWrapper.bind(this);
    this.windowGyroWrapper = this.windowGyroWrapper.bind(this);
    this.resize = this.resize.bind(this);
    this.animationLoop = this.animationLoop.bind(this);
    this.restart = this.restart.bind(this);

    // Set element
    this.options = { ...this.options, ...userOptions };
    this.el = this.options.el as HTMLElement;
    if (this.el == null) {
      error('Instance needs "el" param!');
    } else if (typeof this.el === "string") {
      const selector = this.el;
      const el = q(selector);
      if (!el) {
        error("Cannot find element", selector);
        return;
      }
      this.el = el;
    }

    this.prepareEl();
    this.initThree();
    this.setSize(); // Init needs size

    try {
      this.init();
    } catch (e) {
      error("Init error", e);
      if (this.renderer && this.renderer.domElement) {
        this.el.removeChild(this.renderer.domElement);
      }
      if (this.options.backgroundColor) {
        console.log("[VANTA] Falling back to backgroundColor");
        this.el.style.background = color2Hex(this.options.backgroundColor);
      }
      return;
    }

    // After init
    this.initMouse(); // Triggers mouse, which needs to be called after init
    this.resize();
    this.animationLoop();

    // Event listeners
    const ad = window.addEventListener;
    ad("resize", this.resize);
    window.requestAnimationFrame(this.resize); // Force a resize after the first frame

    // Add event listeners on window, because this element may be below other elements, which would block the element's own mousemove event
    if (this.options.mouseControls) {
      ad("scroll", this.windowMouseMoveWrapper as any);
      ad("mousemove", this.windowMouseMoveWrapper);
    }
    if (this.options.touchControls) {
      ad("touchstart", this.windowTouchWrapper);
      ad("touchmove", this.windowTouchWrapper);
    }
    if (this.options.gyroControls) {
      ad("deviceorientation", this.windowGyroWrapper);
    }
  }

  setOptions(userOptions = {}) {
    Object.assign(this.options, userOptions);
    this.triggerMouseMove();
  }

  prepareEl() {
    let i, child;
    // wrapInner for text nodes, so text nodes can be put into foreground
    if (typeof Node !== "undefined" && Node.TEXT_NODE) {
      for (i = 0; i < this.el.childNodes.length; i++) {
        const n = this.el.childNodes[i];
        if (n.nodeType === Node.TEXT_NODE) {
          const s = document.createElement("span");
          s.textContent = n.textContent;
          n.parentElement?.insertBefore(s, n);
          n.remove();
        }
      }
    }
    // Set foreground elements
    for (i = 0; i < this.el.children.length; i++) {
      child = this.el.children[i] as HTMLElement;
      if (getComputedStyle(child).position === "static") {
        child.style.position = "relative";
      }
      if (getComputedStyle(child).zIndex === "auto") {
        child.style.zIndex = "1";
      }
    }
    // Set canvas and container style
    if (getComputedStyle(this.el).position === "static") {
      this.el.style.position = "relative";
    }
  }

  applyCanvasStyles(canvasEl: HTMLCanvasElement, opts = {}) {
    Object.assign(canvasEl.style, {
      position: "absolute",
      zIndex: 0,
      top: 0,
      left: 0,
      background: "",
    });
    Object.assign(canvasEl.style, opts);
    canvasEl.classList.add("vanta-canvas");
  }

  initThree() {
    if (!THREE.WebGLRenderer) {
      console.warn("[VANTA] No THREE defined on window");
      return;
    }
    // Set renderer
    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    this.el.appendChild(this.renderer.domElement);
    this.applyCanvasStyles(this.renderer.domElement);
    if (isNaN(Number(this.options.backgroundAlpha))) {
      this.options.backgroundAlpha = 1;
    }

    this.scene = new THREE.Scene();
  }

  getCanvasElement() {
    return this.renderer.domElement; // three.js
  }

  getCanvasRect() {
    const canvas = this.getCanvasElement();
    if (!canvas) return false;
    return canvas.getBoundingClientRect();
  }

  windowMouseMoveWrapper(e: MouseEvent) {
    const rect = this.getCanvasRect();
    if (!rect) return false;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (x >= 0 && y >= 0 && x <= rect.width && y <= rect.height) {
      this.mouseX = x;
      this.mouseY = y;
      if (!this.options.mouseEase) this.triggerMouseMove(x, y);
    }
  }

  windowTouchWrapper(e: TouchEvent) {
    const rect = this.getCanvasRect();
    if (!rect) return false;
    if (e.touches.length === 1) {
      const x = e.touches[0].clientX - rect.left;
      const y = e.touches[0].clientY - rect.top;
      if (x >= 0 && y >= 0 && x <= rect.width && y <= rect.height) {
        this.mouseX = x;
        this.mouseY = y;
        if (!this.options.mouseEase) this.triggerMouseMove(x, y);
      }
    }
  }
  windowGyroWrapper(e: DeviceOrientationEvent) {
    const rect = this.getCanvasRect();
    if (!rect || !e.alpha || !e.beta) {
      return false;
    }
    const x = Math.round(e.alpha * 2) - rect.left;
    const y = Math.round(e.beta * 2) - rect.top;
    if (x >= 0 && y >= 0 && x <= rect.width && y <= rect.height) {
      this.mouseX = x;
      this.mouseY = y;
      if (!this.options.mouseEase) {
        this.triggerMouseMove(x, y);
      }
    }
  }

  triggerMouseMove(x?: number, y?: number) {
    if (x === undefined) {
      if (this.options.mouseEase) {
        x = this.mouseEaseX;
      } else {
        x = this.mouseX;
      }
    }
    if (y === undefined) {
      if (this.options.mouseEase) {
        y = this.mouseEaseY;
      } else {
        y = this.mouseY;
      }
    }

    const xNorm = x / this.width; // 0 to 1
    const yNorm = y / this.height; // 0 to 1
    typeof this.onMouseMove === "function"
      ? this.onMouseMove(xNorm, yNorm)
      : void 0;
  }

  setSize() {
    this.scale || (this.scale = 1);
    if (mobileCheck() && this.options.scaleMobile) {
      this.scale = this.options.scaleMobile;
    } else if (this.options.scale) {
      this.scale = this.options.scale;
    }
    this.width = Math.max(this.el.offsetWidth, this.options.minWidth || 0);
    this.height = Math.max(this.el.offsetHeight, this.options.minHeight || 0);
  }
  initMouse() {
    // Init mouseX and mouseY
    if (
      (!this.mouseX && !this.mouseY) ||
      (this.mouseX === (this.options.minWidth || 0) / 2 &&
        this.mouseY === (this.options.minHeight || 0) / 2)
    ) {
      this.mouseX = this.width / 2;
      this.mouseY = this.height / 2;
      this.triggerMouseMove(this.mouseX, this.mouseY);
    }
  }

  resize() {
    this.setSize();
    if (this.camera) {
      this.camera.aspect = this.width / this.height;
      if (typeof this.camera.updateProjectionMatrix === "function") {
        this.camera.updateProjectionMatrix();
      }
    }
    if (this.renderer) {
      this.renderer.setSize(this.width, this.height);
      this.renderer.setPixelRatio(window.devicePixelRatio / this.scale);
    }
    typeof this.onResize === "function" ? this.onResize() : void 0;
  }

  isOnScreen() {
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

  animationLoop() {
    // Step time
    this.t || (this.t = 0);
    this.t += 1;
    // Uniform time
    this.t2 || (this.t2 = 0);
    this.t2 += this.options.speed || 1;

    if (this.options.mouseEase) {
      this.mouseEaseX = this.mouseEaseX || this.mouseX || 0;
      this.mouseEaseY = this.mouseEaseY || this.mouseY || 0;
      if (
        Math.abs(this.mouseEaseX - this.mouseX) +
          Math.abs(this.mouseEaseY - this.mouseY) >
        0.1
      ) {
        this.mouseEaseX += (this.mouseX - this.mouseEaseX) * 0.05;
        this.mouseEaseY += (this.mouseY - this.mouseEaseY) * 0.05;
        this.triggerMouseMove(this.mouseEaseX, this.mouseEaseY);
      }
    }

    if (this.isOnScreen() || this.options.forceAnimate) {
      if (typeof this.onUpdate === "function") {
        this.onUpdate();
      }
      if (this.scene && this.camera) {
        this.renderer.render(this.scene, this.camera);
        this.renderer.setClearColor(
          this.options.backgroundColor!,
          this.options.backgroundAlpha
        );
      }
      if (typeof this.afterRender === "function") this.afterRender();
    }
    return (this.req = window.requestAnimationFrame(this.animationLoop));
  }

  restart() {
    // Restart the effect without destroying the renderer
    if (this.scene) {
      while (this.scene.children.length) {
        this.scene.remove(this.scene.children[0]);
      }
    }
    if (typeof this.onRestart === "function") {
      this.onRestart();
    }
    this.init();
  }

  init() {
    if (typeof this.onInit === "function") {
      this.onInit();
    }
    // this.setupControls()
  }

  destroy() {
    if (typeof this.onDestroy === "function") {
      this.onDestroy();
    }
    const rm = window.removeEventListener;
    rm("touchstart", this.windowTouchWrapper);
    rm("touchmove", this.windowTouchWrapper);
    rm("scroll", this.windowMouseMoveWrapper as any);
    rm("mousemove", this.windowMouseMoveWrapper);
    rm("deviceorientation", this.windowGyroWrapper);
    rm("resize", this.resize);
    window.cancelAnimationFrame(this.req);

    const scene = this.scene;
    if (scene && scene.children) {
      clearThree(scene);
    }
    if (this.renderer) {
      if (this.renderer.domElement) {
        this.el.removeChild(this.renderer.domElement);
      }
      this.renderer = null as any;
      this.scene = null as any;
    }
  }
}

export class Net extends VantaBase {
  blending: unknown;
  camera!: THREE.PerspectiveCamera;
  cont!: THREE.Group;
  height!: number;
  lineColors!: Float32Array;
  linePositions!: Float32Array;
  linesMesh!: THREE.LineSegments;
  points!: Array<
    | THREE.Mesh<THREE.SphereGeometry, THREE.MeshLambertMaterial>
    | THREE.Object3D<THREE.Event>
  >;
  rayCaster: unknown;
  rcMouseX: unknown;
  rcMouseY: unknown;
  scene!: THREE.Scene;
  spot!: THREE.SpotLight;
  t!: number;
  width!: number;
  constructor(userOptions: Partial<VantaOptions>) {
    super(userOptions);
    this.init();
  }

  genPoint(x: number, y: number, z: number) {
    let sphere;
    if (!this.points) {
      this.points = [];
    }
    if (this.options.showDots) {
      const geometry = new THREE.SphereGeometry(0.25, 12, 12); // radius, width, height
      const material = new THREE.MeshLambertMaterial({
        color: this.options.color,
      });
      sphere = new THREE.Mesh(geometry, material);
    } else {
      sphere = new THREE.Object3D();
    }
    this.cont.add(sphere);
    sphere.ox = x;
    sphere.oy = y;
    sphere.oz = z;
    sphere.position.set(x, y, z);
    sphere.r = rn(-2, 2); // rotation rate
    return this.points.push(sphere);
  }

  onInit = () => {
    this.cont = new THREE.Group();
    this.cont.position.set(0, 0, 0);
    this.scene.add(this.cont);

    let n = this.options.points;
    let { spacing } = this.options;
    if (mobileCheck()) {
      n = ~~(Number(n) * 0.75);
      spacing = ~~(Number(spacing) * 0.65);
    }

    const numPoints = n! * n! * 2;
    this.linePositions = new Float32Array(numPoints * numPoints * 3);
    this.lineColors = new Float32Array(numPoints * numPoints * 3);

    const colorB = getBrightness(new THREE.Color(this.options.color));
    const bgB = getBrightness(new THREE.Color(this.options.backgroundColor));
    this.blending = colorB > bgB ? "additive" : "subtractive";

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(this.linePositions, 3).setUsage(
        THREE.DynamicDrawUsage
      )
    );
    geometry.setAttribute(
      "color",
      new THREE.BufferAttribute(this.lineColors, 3).setUsage(
        THREE.DynamicDrawUsage
      )
    );
    geometry.computeBoundingSphere();
    geometry.setDrawRange(0, 0);
    const material = new THREE.LineBasicMaterial({
      vertexColors: true,
      blending:
        this.blending === "additive" ? THREE.AdditiveBlending : undefined,
      transparent: true,
    });

    this.linesMesh = new THREE.LineSegments(geometry, material);
    this.cont.add(this.linesMesh);

    for (let i = 0; i <= n!; i++) {
      for (let j = 0; j <= n!; j++) {
        const y = ri(-3, 3);
        const x = (i - n! / 2) * spacing! + ri(-5, 5);
        let z = (j - n! / 2) * spacing! + ri(-5, 5);
        if (i % 2) {
          z += spacing! * 0.5;
        } // offset

        this.genPoint(x, y - ri(5, 15), z);
        this.genPoint(x + ri(-5, 5), y + ri(5, 15), z + ri(-5, 5));
      }
    }

    this.camera = new THREE.PerspectiveCamera(
      25,
      this.width / this.height,
      0.01,
      10000
    );
    this.camera.position.set(50, 100, 150);
    this.scene.add(this.camera);

    const ambience = new THREE.AmbientLight(0xffffff, 0.75);
    this.scene.add(ambience);

    this.spot = new THREE.SpotLight(0xffffff, 1);
    this.spot.position.set(0, 200, 0);
    this.spot.distance = 400;
    this.spot.target = this.cont;
    return this.scene.add(this.spot);
  };

  onDestroy = () => {
    if (this.scene) {
      this.scene.remove(this.linesMesh);
    }
    // @ts-ignore
    this.spot =
      // @ts-ignore
      this.points =
      // @ts-ignore
      this.linesMesh =
      // @ts-ignore
      this.lineColors =
      // @ts-ignore
      this.linePositions =
        null;
  };

  setOptions(userOptions: Partial<VantaOptions>) {
    // allow setOptions to change point colors
    super.setOptions(userOptions);
    if (userOptions.color) {
      this.points.forEach((p) => {
        if ("material" in p) {
          p.material.color = new THREE.Color(userOptions.color);
        }
      });
    }
  }

  onUpdate = () => {
    let diff: number;
    const c = this.camera;
    if (Math.abs(c.tx - c.position.x) > 0.01) {
      diff = c.tx - c.position.x;
      c.position.x += diff * 0.02;
    }
    if (Math.abs(c.ty - c.position.y) > 0.01) {
      diff = c.ty - c.position.y;
      c.position.y += diff * 0.02;
    }
    c.lookAt(new THREE.Vector3(0, 0, 0));

    let vertexpos = 0;
    let colorpos = 0;
    let numConnected = 0;

    const bgColor = new THREE.Color(this.options.backgroundColor);
    const color = new THREE.Color(this.options.color);
    const diffColor = color.clone().sub(bgColor);

    for (let i = 0; i < this.points.length; i++) {
      let dist;
      const p = this.points[i];
      p.scale.x = p.scale.y = p.scale.z = 1;

      if (p.r !== 0) {
        let ang = Math.atan2(p.position.z, p.position.x);
        dist = Math.sqrt(
          p.position.z * p.position.z + p.position.x * p.position.x
        );
        ang += 0.00025 * p.r;
        p.position.x = dist * Math.cos(ang);
        p.position.z = dist * Math.sin(ang);
      }

      for (let j = i; j < this.points.length; j++) {
        const p2 = this.points[j];
        const dx = p.position.x - p2.position.x;
        const dy = p.position.y - p2.position.y;
        const dz = p.position.z - p2.position.z;
        dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < this.options.maxDistance) {
          let lineColor;
          const alpha = clamp(
            (1.0 - dist / this.options.maxDistance) * 2,
            0,
            1
          );
          if (this.blending === "additive") {
            lineColor = new THREE.Color(0x000000).lerp(diffColor, alpha);
          } else {
            lineColor = bgColor.clone().lerp(color, alpha);
          }

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
    if (!c.oy) {
      c.oy = c.position.y;
      c.ox = c.position.x;
      c.oz = c.position.z;
    }
    const ang = Math.atan2(c.oz, c.ox);
    const dist = Math.sqrt(c.oz * c.oz + c.ox * c.ox);
    const tAng = ang + (x - 0.5) * 2 * (this.options.mouseCoeffX || 1);
    c.tz = dist * Math.sin(tAng);
    c.tx = dist * Math.cos(tAng);
    c.ty = c.oy + (y - 0.5) * 50 * (this.options.mouseCoeffY || 1);

    if (!this.rayCaster) {
    }
    this.rcMouseX = x * 2 - 1;
    this.rcMouseY = -x * 2 + 1;
  };

  onRestart = () => {
    if (this.scene) this.scene.remove(this.linesMesh);
    this.points = [];
  };
}
