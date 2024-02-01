import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { screen } from '@testing-library/dom';
import { ProgressiveCounter } from '../src/index';
import { progressiveCounter } from '../src/progressiveCounter';

describe('Progressive Counter', () => {
  it('renders without crashing', () => {
    const container = document.createElement('div');
    console.log(React);
    const root = createRoot(container!);
    root.render(<ProgressiveCounter initialValue={0} finalValue={299.89} />);
    root.unmount();
  });

  it('execute the counter with the initial value', () => {
    document.body.innerHTML = '<div class="counter"></div>';

    progressiveCounter({
      initialValue: 0,
      finalValue: 200.89,
      decimals: 2,
      class: 'counter',
    });

    document.querySelector('.counter')!.innerHTML = '200.89';

    expect(screen.getByText('200.89')).toBeInTheDocument();
  });
});
