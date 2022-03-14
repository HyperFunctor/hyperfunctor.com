import { useEffect, useRef } from "react";

import { stfu } from "../../utils";

import { Net } from "./animation";

export const HomepageBg = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const effect = useRef<Net | null>(null);
  const maxDistanceRef = useRef(0);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) {
      return;
    }

    window.requestAnimationFrame(() => {
      effect.current = new Net({
        el,
      });
    });

    return () => {
      stfu(() => effect.current?.destroy());
    };
  }, []);

  return <div ref={rootRef} className="inset-0 absolute"></div>;
};
