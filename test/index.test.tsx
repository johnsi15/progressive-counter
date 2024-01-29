import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { ProgressiveCounter } from '../src/index';

describe('Progressive Counter', () => {
  it('renders without crashing', () => {
    const container = document.createElement('div');
    console.log(React);
    const root = createRoot(container!);
    root.render(<ProgressiveCounter initialValue={0} finalValue={299.89} />);
    root.unmount();
  });
});
