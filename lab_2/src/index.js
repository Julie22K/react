import React from 'react';
import ReactDOM from 'react-dom/client';

import './CSS/index.css';
import './CSS/images.css';
import './CSS/icons.css';
import './CSS/text.css';
import './CSS/nav.css';
import './CSS/link_and_buttons.css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
