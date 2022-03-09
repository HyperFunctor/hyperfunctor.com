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
} from "./helpers";

const error = (...args) => console.error(...args);

class VantaBase {
  options = {
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
    this.el = this.options.el;
    if (this.el == null) {
      error('Instance needs "el" param!');
    } else if (!(this.options.el instanceof HTMLElement)) {
      const selector = this.el;
      this.el = q(selector);
      if (!this.el) {
        error("Cannot find element", selector);
        return;
      }
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
      ad("scroll", this.windowMouseMoveWrapper);
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
          n.parentElement.insertBefore(s, n);
          n.remove();
        }
      }
    }
    // Set foreground elements
    for (i = 0; i < this.el.children.length; i++) {
      child = this.el.children[i];
      if (getComputedStyle(child).position === "static") {
        child.style.position = "relative";
      }
      if (getComputedStyle(child).zIndex === "auto") {
        child.style.zIndex = 1;
      }
    }
    // Set canvas and container style
    if (getComputedStyle(this.el).position === "static") {
      this.el.style.position = "relative";
    }
  }

  applyCanvasStyles(canvasEl, opts = {}) {
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
    if (isNaN(this.options.backgroundAlpha)) {
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

  windowMouseMoveWrapper(e) {
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
  windowTouchWrapper(e) {
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
  windowGyroWrapper(e) {
    const rect = this.getCanvasRect();
    if (!rect) return false;
    const x = Math.round(e.alpha * 2) - rect.left;
    const y = Math.round(e.beta * 2) - rect.top;
    if (x >= 0 && y >= 0 && x <= rect.width && y <= rect.height) {
      this.mouseX = x;
      this.mouseY = y;
      if (!this.options.mouseEase) this.triggerMouseMove(x, y);
    }
  }

  triggerMouseMove(x, y) {
    if (x === undefined && y === undefined) {
      if (this.options.mouseEase) {
        x = this.mouseEaseX;
        y = this.mouseEaseY;
      } else {
        x = this.mouseX;
        y = this.mouseY;
      }
    }
    if (this.uniforms) {
      this.uniforms.iMouse.value.x = x / this.scale; // pixel values
      this.uniforms.iMouse.value.y = y / this.scale; // pixel values
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
    this.width = Math.max(this.el.offsetWidth, this.options.minWidth);
    this.height = Math.max(this.el.offsetHeight, this.options.minHeight);
  }
  initMouse() {
    // Init mouseX and mouseY
    if (
      (!this.mouseX && !this.mouseY) ||
      (this.mouseX === this.options.minWidth / 2 &&
        this.mouseY === this.options.minHeight / 2)
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
    if (this.uniforms) {
      this.uniforms.iTime.value = this.t2 * 0.016667; // iTime is in seconds
    }

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

    // Only animate if element is within view
    if (this.isOnScreen() || this.options.forceAnimate) {
      if (typeof this.onUpdate === "function") {
        this.onUpdate();
      }
      if (this.scene && this.camera) {
        this.renderer.render(this.scene, this.camera);
        this.renderer.setClearColor(
          this.options.backgroundColor,
          this.options.backgroundAlpha
        );
      }
      if (this.fps && this.fps.update) this.fps.update();
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
    rm("scroll", this.windowMouseMoveWrapper);
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
      this.renderer = null;
      this.scene = null;
    }
  }
}

export class Net extends VantaBase {
  constructor(userOptions) {
    super(userOptions);
    this.init();
  }

  genPoint(x, y, z) {
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

  onInit() {
    this.cont = new THREE.Group();
    this.cont.position.set(0, 0, 0);
    this.scene.add(this.cont);

    let n = this.options.points;
    let { spacing } = this.options;
    if (mobileCheck()) {
      n = ~~(n * 0.75);
      spacing = ~~(spacing * 0.65);
    }

    const numPoints = n * n * 2;
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
      vertexColors: THREE.VertexColors,
      blending: this.blending === "additive" ? THREE.AdditiveBlending : null,
      transparent: true,
    });
    // blending: THREE.CustomBlending
    // blendEquation: THREE.SubtractEquation
    // blendSrc: THREE.SrcAlphaFactor
    // blendDst: THREE.OneMinusSrcAlphaFactor

    this.linesMesh = new THREE.LineSegments(geometry, material);
    this.cont.add(this.linesMesh);

    for (let i = 0; i <= n; i++) {
      for (let j = 0; j <= n; j++) {
        const y = ri(-3, 3);
        const x = (i - n / 2) * spacing + ri(-5, 5);
        let z = (j - n / 2) * spacing + ri(-5, 5);
        if (i % 2) {
          z += spacing * 0.5;
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

    // ambience = new THREE.AmbientLight(0xffffff, 0.01)
    // @scene.add(ambience)

    // @pointLight = new THREE.PointLight(0xFFFFFF, 0.01)
    // @pointLight.position.set(0, 150, 200)
    // @scene.add( @pointLight )

    const ambience = new THREE.AmbientLight(0xffffff, 0.75);
    this.scene.add(ambience);

    this.spot = new THREE.SpotLight(0xffffff, 1);
    this.spot.position.set(0, 200, 0);
    this.spot.distance = 400;
    this.spot.target = this.cont;
    return this.scene.add(this.spot);
  }

  onDestroy() {
    if (this.scene) this.scene.remove(this.linesMesh);
    this.spot =
      this.points =
      this.linesMesh =
      this.lineColors =
      this.linePositions =
        null;
  }

  setOptions(userOptions) {
    // allow setOptions to change point colors
    super.setOptions(userOptions);
    if (userOptions.color) {
      this.points.forEach((p) => {
        p.material.color = new THREE.Color(userOptions.color);
      });
    }
  }

  onUpdate() {
    let diff, t;
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
    // c.near = 0.01
    // c.updateProjectionMatrix()

    let vertexpos = 0;
    let colorpos = 0;
    let numConnected = 0;

    const bgColor = new THREE.Color(this.options.backgroundColor);
    const color = new THREE.Color(this.options.color);
    const diffColor = color.clone().sub(bgColor);

    if (this.rayCaster) {
      this.rayCaster.setFromCamera(
        new THREE.Vector2(this.rcMouseX, this.rcMouseY),
        this.camera
      );
    }

    for (let i = 0; i < this.points.length; i++) {
      let dist, distToMouse;
      const p = this.points[i];

      if (this.rayCaster) {
        distToMouse = this.rayCaster.ray.distanceToPoint(p.position);
      } else {
        distToMouse = 1000;
      }
      const distClamp = distToMouse.clamp(5, 15);
      p.scale.x =
        p.scale.y =
        p.scale.z =
          ((15 - distClamp) * 0.25).clamp(1, 100);

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
          const alpha = ((1.0 - dist / this.options.maxDistance) * 2).clamp(
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
  }

  onMouseMove(x, y) {
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
  }

  onRestart() {
    if (this.scene) this.scene.remove(this.linesMesh);
    this.points = [];
  }
}
