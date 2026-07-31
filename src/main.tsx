import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {MotionConfig} from 'motion/react';
import App from './App.tsx';
import './index.css';
import {setupImageDefaults} from './lib/imageDefaults.ts';
import {initPerformanceVitals} from './lib/performanceVitals.ts';

setupImageDefaults();
if (import.meta.env.DEV) {
  initPerformanceVitals();
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <App />
    </MotionConfig>
  </StrictMode>,
);
