export const clamp = function (value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
};

export function mobileCheck() {
  if (typeof navigator !== "undefined") {
    return (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) || window.innerWidth < 600
    );
  }
  return null;
}

export const sample = <T>(items: readonly T[]): T =>
  items[Math.floor(Math.random() * items.length)];

export function rn(
  start?: number | null | undefined,
  end?: number | null | undefined
) {
  if (start == null) start = 0;
  if (end == null) end = 1;
  return start + Math.random() * (end - start);
}

export const ri = (start = 0, end = 1) => {
  return Math.floor(start + Math.random() * (end - start + 1));
};

export const q = <K extends keyof HTMLElementTagNameMap>(sel: K) =>
  document.querySelector(sel);

type ColorInput = number | string;
type Color = { r: number; g: number; b: number };

export const color2Hex = (color: ColorInput) => {
  if (typeof color == "number") {
    return "#" + ("00000" + color.toString(16)).slice(-6);
  } else {
    return color;
  }
};

export const color2Rgb = (color: ColorInput, alpha = 1) => {
  const hex = color2Hex(color);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)!;
  const obj: Color = {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  };
  return `rgba(${obj.r},${obj.g},${obj.b},${alpha})`;
};

export const getBrightness = (threeColor: Color) => {
  return 0.299 * threeColor.r + 0.587 * threeColor.g + 0.114 * threeColor.b;
};

export function clearThree(obj: THREE.Scene | THREE.Object3D | THREE.Line) {
  while (obj.children && obj.children.length > 0) {
    clearThree(obj.children[0]);
    obj.remove(obj.children[0]);
  }
  if ("geometry" in obj) obj.geometry.dispose();
  if ("material" in obj) {
    if (Array.isArray(obj.material)) {
      obj.material.forEach(dispose);
    } else {
      dispose(obj.material);
    }
  }

  function dispose(material: THREE.Material) {
    Object.keys(material).forEach((_prop) => {
      const prop = _prop as keyof typeof material;
      if (!material[prop]) return;
      if (
        material[prop] !== null &&
        typeof material[prop].dispose === "function"
      ) {
        material[prop].dispose();
      }
    });
    material.dispose();
  }
}
