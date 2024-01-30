import * as React from 'react';

import { useProgressiveCounter } from './hooks/useProgressiveCounter';

interface Props {
  initialValue: number | (() => number);
  finalValue: number;
  duration?: number;
  decimals?: number;
  delay?: number;
  className?: string;
  element?: string;
}

export function ProgressiveCounter({
  initialValue,
  finalValue,
  decimals,
  duration,
  delay,
  className,
  element = 'div',
}: Props) {
  const [count] = useProgressiveCounter(
    initialValue,
    duration,
    decimals,
    delay,
    finalValue
  );

  return React.createElement(element, { className }, count);
}

export function ProgressiveCounterJS() {
  const progressiveCounter = ({
    initialValue,
    duration = 1500,
    decimals = 0,
    delay = 5,
    finalValue,
  }: Props) => {
    let target = finalValue;
    let current = initialValue;
    let currentStep = 1;
    let timeoutId: any;

    const initial =
      typeof initialValue === 'function' ? initialValue() : initialValue;

    const lerp = (a: number, b: number, alpha: number) => {
      return a + alpha * (b - a);
    };

    const easeOutCubic = (value: number) => {
      return 1 - Math.pow(1 - value, 3);
    };

    const steps = Math.max(Math.floor(duration / delay), 1);

    const setTimeoutHandler = () => {
      const progress = currentStep / steps;
      console.log({ progress, current });
      if (progress === 1) {
        current = target;
        clearTimeout(timeoutId);
      } else {
        current = lerp(initial, target, easeOutCubic(progress));
        currentStep = currentStep + 1;
        timeoutId = setTimeout(setTimeoutHandler, delay);
      }

      console.log(current);

      return current.toFixed(decimals);
    };

    timeoutId = setTimeout(setTimeoutHandler, delay);
  };

  console.log(
    progressiveCounter({ initialValue: 1, finalValue: 200.98, decimals: 1 })
  );

  // document.querySelector('.counter')?.innerText = progressiveCounter({
  //   initialValue: 1,
  //   finalValue: 200.98,
  //   decimals: 1,
  // });
}
