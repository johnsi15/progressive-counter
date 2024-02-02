import { useState, useCallback, useEffect } from 'react';

export const useProgressiveCounter = (
  initialValue: number | (() => number),
  duration = 1500,
  decimals = 0,
  delay = 5,
  finalValue: number
): [string] => {
  const [target, setTarget] = useState(initialValue);
  const [current, setCurrent] = useState(initialValue);
  // const [steps, setSteps] = useState(1);
  // const [currentStep, setCurrentStep] = useState(1);

  const initial =
    typeof initialValue === 'function' ? initialValue() : initialValue;

  const setValue = useCallback(
    (value: number) => {
      const nextTarget = value;
      const steps = Math.max(Math.floor(duration / delay), 1);

      // setSteps(steps);
      setTarget(nextTarget);
      // setCurrentStep(1);
      setCurrent(lerp(initial, nextTarget, easeOutCubic(1 / steps)));
    },
    [delay, duration, initial]
  );

  useEffect(() => {
    let startTime: number | null = null;
    let requestId: number;

    const updateCounter = () => {
      if (startTime === null) {
        startTime = Date.now() + delay;
      }

      const elapsed = Date.now() - startTime;
      const progress = elapsed / duration;

      if (progress >= 1) {
        setCurrent(target);
      } else {
        const value = lerp(initial, target, easeOutCubic(progress));
        setCurrent(value);
        requestId = requestAnimationFrame(updateCounter);
      }
    };

    requestId = requestAnimationFrame(updateCounter);

    return () => {
      cancelAnimationFrame(requestId);
    };
  }, [duration, target, initial, delay]);

  useEffect(() => {
    setValue(finalValue);
  }, [finalValue, setValue]);

  const value = current.toFixed(decimals);

  return [value];
};

const lerp = (a: number, b: number, alpha: number): number => {
  return a + alpha * (b - a);
};

const easeOutCubic = (value: number): number => {
  return 1 - Math.pow(1 - value, 3);
};
