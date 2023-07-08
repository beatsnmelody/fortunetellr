import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
// css stylesheets can be created for each component
// place them in the src/style directory, and import them like this:
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);