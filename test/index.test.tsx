import * as React from 'react';
import { createRoot } from 'react-dom/client';
// import { getByText } from '@testing-library/dom';
// import { act } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ProgressiveCounter } from '../src/index';
import { progressiveCounter } from '../src/progressiveCounter';

describe('Progressive Counter', () => {
  it.skip('renders without crashing', () => {
    const container = document.createElement('div');
    console.log(React);
    const root = createRoot(container!);
    root.render(<ProgressiveCounter initialValue={0} finalValue={299.89} />);

    root.unmount();
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
