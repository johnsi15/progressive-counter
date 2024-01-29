import 'react-app-polyfill/ie11';
import * as React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { ProgressiveCounter } from '../.';

const App = () => {
  return (
    <div>
      <ProgressiveCounter valueInitial={0} valueEnd={900} />
    </div>
  );
};

const container = document.getElementById('root')!;

hydrateRoot(container, <App />);
