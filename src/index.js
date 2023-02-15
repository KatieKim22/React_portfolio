import React from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HelmetProvider>
    <Helmet>
      <title>Katie Kim</title>
      <link rel="favicon" href="./components/image/favicon.svg" />
    </Helmet>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HelmetProvider>
);

