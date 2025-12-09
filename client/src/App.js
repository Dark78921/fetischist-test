import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import MainPage from './components/MainPage';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => setUser(userData);
  const handleRegister = (userData) => setUser(userData);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <MainPage />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/register" element={<RegisterPage onRegister={handleRegister} />} />
      </Routes>
    </Router>
  );
}

export default App;