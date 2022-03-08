import { useEffect, useRef, ReactNode } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

const stfu = (fn: () => void) => {
  try {
    fn();
  } catch {}
};

const throttle = (fn: () => void, timeFrame: number) => {
  let lastTime = 0;
  return () => {
    const now = Date.now();
    if (now - lastTime >= timeFrame) {
      fn();
      lastTime = now;
    }
  };
};

export const HomepageBg = ({ children }: { children: ReactNode }) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const maxDistanceRef = useRef(0);
  const increasingRef = useRef(true);

  useEffect(() => {
    if (!rootRef.current) {
      return;
    }

    const effect = NET({
      THREE,
      el: rootRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: window.innerHeight,
      minWidth: window.innerWidth,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0xec4899,
      backgroundColor: 0x1f2937,
      maxDistance: maxDistanceRef.current,
      points: Math.floor(Math.random() * 10 + 10 / 2),
      spacing: Math.floor(Math.random() * 15 + 15 / 2),
    });

    const interval = setInterval(() => {
      if (increasingRef.current) {
        maxDistanceRef.current += Math.floor(Math.random() * 2);
      } else {
        maxDistanceRef.current -= Math.floor(Math.random() * 2);
      }

      if (maxDistanceRef.current === 0) {
        increasingRef.current = true;
      } else if (maxDistanceRef.current === 35) {
        increasingRef.current = false;
      }

      effect.setOptions({ maxDistance: maxDistanceRef.current });
    }, 100);

    const onResize = throttle(() => {
      effect.setOptions({
        minHeight: window.innerHeight,
        minWidth: window.innerWidth,
      });
    }, 100);

    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      stfu(() => effect.destroy());
      stfu(() => window.removeEventListener("resize", onResize));
      stfu(() => clearInterval(interval));
    };
  }, []);

  return <div ref={rootRef}>{children}</div>;
};
