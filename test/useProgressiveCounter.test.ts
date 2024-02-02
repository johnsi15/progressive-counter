import { renderHook, act } from '@testing-library/react';
import { useProgressiveCounter } from '../src/hooks/useProgressiveCounter';

describe('Progressive Counter Hook', () => {
  it('hook get count value progressive counter', () => {
    act(() => {
      const { result } = renderHook(() => {
        const [count] = useProgressiveCounter(
          0,
          undefined,
          undefined,
          undefined,
          100.987
        );
        console.log(count);
        return count;
      });
      // result.current
      console.log({ result });
    });
  }, 500);
});
