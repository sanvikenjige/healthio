import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/login';
import PatientDashboard from './components/PatientDashboard';
import ProviderDashboard from './components/ProviderDashboard';
import WelcomePage from './components/welcome'; // Import WelcomePage

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login

  const handleLogin = () => {
    setIsLoggedIn(true); // Simulate login
  };

  return (
    <Router>
      <Routes>
        {/* Add route for Welcome Page */}
        <Route path="/" element={<WelcomePage />} />

        {/* Login page route */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        
        {/* Protected routes - these should be available only after login */}
        {isLoggedIn ? (
          <>
            <Route path="/patient" element={<PatientDashboard />} />
            <Route path="/provider" element={<ProviderDashboard />} />
          </>
        ) : (
          // If not logged in, redirect to login page
          <Route path="/" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;


