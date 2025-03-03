import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18+ import
import './index.css';
import App from './App';

// Get the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component using the new method in React 18
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

