import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import '@styles/bootstrap-reboot.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@styles/basic-styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
