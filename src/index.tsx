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
}

export function ProgressiveCounter({
  initialValue,
  finalValue,
  decimals,
  duration,
  delay,
  className,
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

  return <div className={className}>{count}</div>;
}
