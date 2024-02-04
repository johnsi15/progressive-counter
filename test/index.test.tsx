import * as React from 'react';
import { render, screen, act } from '@testing-library/react';
// import '@testing-library/jest-dom';

import { ProgressiveCounter } from '../src/index';
import { progressiveCounter } from '../src/progressiveCounter';

describe('Progressive Counter', () => {
  it('renders without crashing', () => {
    jest.useFakeTimers();

    act(() => {
      render(
        <ProgressiveCounter initialValue={0} finalValue={299.89} decimals={2} />
      );
    });

    act(() => {
      jest.runAllTimers();
    });

    expect(screen.getByRole('counter').textContent).toBe('299.89');
  });

  it('render component with element h2', () => {
    jest.useFakeTimers();

    act(() => {
      render(
        <ProgressiveCounter
          initialValue={0}
          finalValue={299.89}
          element="h2"
          decimals={2}
        />
      );
    });

    act(() => {
      jest.runAllTimers();
    });

    expect(screen.getByRole('counter')).toBeInTheDocument();
    expect(screen.getByRole('counter').tagName).toBe('H2');
    expect(screen.getByRole('counter')).toHaveTextContent('299.89');
  });

  it('execute the counter with the initial value', () => {
    jest.useFakeTimers();
    document.body.innerHTML = '<div class="counter"></div>';

    progressiveCounter({
      initialValue: 0,
      duration: 1500,
      finalValue: 200.89,
      decimals: 2,
      class: 'counter',
    });

    jest.runAllTimers();
    const counterElement = document.querySelector<HTMLDivElement>('.counter');
    if (counterElement) {
      expect(counterElement).toBeInTheDocument();
      expect(counterElement.innerText).toBe('200.89');
    }
    jest.useRealTimers();
  });
});
