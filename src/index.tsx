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
  class?: string;
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
