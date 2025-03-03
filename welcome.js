// src/components/WelcomePage.js
// src/components/WelcomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welcome to Healthio!</h1>
      <p>We're glad to have you here. Please log in to continue.</p>
      <Link to="/login">
        <button style={{ padding: '10px 20px', fontSize: '16px' }}>
          Go to Login
        </button>
      </Link>
    </div>
  );
};

export default WelcomePage;
