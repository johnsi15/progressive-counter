import * as React from 'react';

import { useEffect } from 'react';
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
  const [count, setCount] = useProgressiveCounter(
    initialValue,
    duration,
    decimals,
    delay
  );

  useEffect(() => {
    setCount(finalValue);
  }, [finalValue, setCount]);

  return React.createElement(element, { className }, count);
}
