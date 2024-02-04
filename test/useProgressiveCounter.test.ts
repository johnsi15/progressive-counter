import { renderHook, act } from '@testing-library/react';
import { useProgressiveCounter } from '../src/hooks/useProgressiveCounter';

describe('Progressive Counter Hook', () => {
  it('hook get count value progressive counter with 0 decimals', async () => {
    const FINAL_VALUE = 100 // eslint-disable-line
    const { result } = renderHook(() => {
      return useProgressiveCounter(0, 1500, 0, 5, FINAL_VALUE); // eslint-disable-line
    });

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1500));
    });

    expect(result.current[0]).toBe(`${FINAL_VALUE}`);
  });

  it('hook get count value progressive counter with 1 decimals', async () => {
    const FINAL_VALUE = 100.0 // eslint-disable-line
    const { result } = renderHook(() => {
      return useProgressiveCounter(0, 1500, 1, 5, FINAL_VALUE); // eslint-disable-line
    });

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1500));
    });

    expect(result.current[0]).toBe(`100.0`);
  });

  it('hook get count value progressive counter with 2 decimals', async () => {
    const FINAL_VALUE = 100.00 // eslint-disable-line
    const { result } = renderHook(() => {
      return useProgressiveCounter(0, 1500, 2, 5, FINAL_VALUE); // eslint-disable-line
    });

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1500));
    });

    expect(result.current[0]).toBe('100.00');
  });

  it('hook get count value progressive counter with 3 decimals', async () => {
    const FINAL_VALUE = 100.897;
    const { result } = renderHook(() =>
      useProgressiveCounter(0, 1500, 3, 5, FINAL_VALUE)
    );

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    });

    expect(result.current[0]).toBe(`${FINAL_VALUE}`);
  });
});
