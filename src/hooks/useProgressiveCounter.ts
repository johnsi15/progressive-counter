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
  const [steps, setSteps] = useState(1);
  const [currentStep, setCurrentStep] = useState(1);

  const initial =
    typeof initialValue === 'function' ? initialValue() : initialValue;

  const setValue = useCallback(
    (value: number) => {
      const nextTarget = value;
      const steps = Math.max(Math.floor(duration / delay), 1);

      setSteps(steps);
      setTarget(nextTarget);
      setCurrentStep(1);
      setCurrent(lerp(initial, nextTarget, easeOutCubic(1 / steps)));
    },
    [delay, duration, initial]
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      const progress = currentStep / steps;
      if (progress === 1) {
        setCurrent(target);
      } else {
        setCurrent(lerp(initial, target, easeOutCubic(progress)));
        setCurrentStep(currentStep + 1);
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay, currentStep, target, initial, steps]);

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
