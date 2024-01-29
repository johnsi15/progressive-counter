import * as React from 'react';

import { useEffect } from 'react';
import { useProgressiveCounter } from './hooks/useProgressiveCounter';

interface Props {
  valueInitial: number;
  valueEnd: number;
}

export function ProgressiveCounter({ valueInitial, valueEnd }: Props) {
  const [count, setCount] = useProgressiveCounter(valueInitial);

  useEffect(() => {
    setCount(valueEnd);
  }, [valueEnd, setCount]);

  return <div>{count}</div>;
}
