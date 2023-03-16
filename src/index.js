import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routes from './routes/Routes'

/**
 * The root component of the React application.
 * Renders the Routes component within a React StrictMode.
 *
 * @return {void}
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);
