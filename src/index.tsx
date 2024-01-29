import * as React from 'react';

import { useEffect } from 'react';
import { useProgressiveCounter } from './hooks/useProgressiveCounter';

interface Props {
  initialValue: number | (() => number);
  finalValue: number;
  duration?: number;
  decimals?: number;
  delay?: number;
}

export function ProgressiveCounter({ initialValue, finalValue }: Props) {
  const [count, setCount] = useProgressiveCounter(initialValue);

  useEffect(() => {
    setCount(finalValue);
  }, [finalValue, setCount]);

  return <div>{count}</div>;
}
