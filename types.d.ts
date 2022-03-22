declare module "vanta/dist/vanta.net.min" {
  import * as THREE from "three";

  interface VantaArgs {
    THREE: THREE;
    el: HTMLElement;
    mouseControls: boolean;
    touchControls: boolean;
    gyroControls: boolean;
    minHeight: number;
    minWidth: number;
    scale: number;
    scaleMobile: number;
    color: number;
    backgroundColor: number;
    maxDistance: number;
    points: number;
    spacing: number;
  }

  interface VantaResult {
    setOptions(args: Partial<VantaArgs>): void;
    destroy(): void;
  }

  function NET(args: VantaArgs): VantaResult;

  // eslint-disable-next-line import/no-default-export -- this is it
  export default NET;
}
