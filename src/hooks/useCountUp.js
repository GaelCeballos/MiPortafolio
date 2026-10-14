import { useEffect, useRef, useState } from 'react';

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

/**
 * Counts from 0 to `target` over `duration` ms, starting after `delay` ms.
 * Driven by requestAnimationFrame rather than setInterval so the easing reads smoothly.
 */
export function useCountUp(target, { duration = 2000, delay = 1200 } = {}) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    let startTime = null;

    function tick(now) {
      if (startTime === null) startTime = now;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setValue(Math.round(target * easeOutCubic(progress)));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    }

    const delayId = setTimeout(() => {
      rafRef.current = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(delayId);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration, delay]);

  return value;
}
