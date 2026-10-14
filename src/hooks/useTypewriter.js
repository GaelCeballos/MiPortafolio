import { useEffect, useState } from 'react';

/**
 * Types `text` out at `speed` ms/char, after `startDelay` ms.
 * setState fires once per character (~every 35ms), not per animation frame,
 * so this stays well under the "don't setState in a rAF loop" budget.
 */
export function useTypewriter(text, { speed = 35, startDelay = 0 } = {}) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setCount(0);
    setDone(false);

    let i = 0;
    let intervalId;

    const startId = setTimeout(() => {
      intervalId = setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= text.length) {
          clearInterval(intervalId);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(startId);
      clearInterval(intervalId);
    };
  }, [text, speed, startDelay]);

  return { displayed: text.slice(0, count), done };
}
