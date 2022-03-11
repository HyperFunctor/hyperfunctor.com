export const stfu = (fn: () => void) => {
  try {
    fn();
  } catch {}
};

export const throttle = (fn: () => void, timeFrame: number) => {
  let lastTime = 0;
  return () => {
    const now = Date.now();
    if (now - lastTime >= timeFrame) {
      fn();
      lastTime = now;
    }
  };
};

export const debounce = (fn: () => void, timeout: number) => {
  let timer: ReturnType<typeof setTimeout>;

  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, timeout);
  };
};
