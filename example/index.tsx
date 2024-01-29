import 'react-app-polyfill/ie11';
import * as React from 'react';
import { hydrateRoot } from 'react-dom/client';
import './style.css';
import { ProgressiveCounter } from '../.';

const App = () => {
  return (
    <>
      {/* prettier-ignore */}
      <ProgressiveCounter
        initialValue={0}
        finalValue={69.000}
        decimals={3}
        className="number"
        element='h1'
      />
      {/* prettier-ignore */}
      <ProgressiveCounter
        initialValue={0}
        finalValue={109.000}
        decimals={2}
        className="number"
      />
      <ProgressiveCounter
        initialValue={0}
        finalValue={109.0}
        decimals={1}
        className="number"
      />
      <ProgressiveCounter
        initialValue={0}
        finalValue={109}
        className="number"
      />
    </>
  );
};

const container = document.getElementById('root')!;

hydrateRoot(container, <App />);
