// src/components/RegisterPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function RegisterPage({ onRegister }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement registration API call here
    onRegister({ username, email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow max-w-sm w-full">
        <h2 className="text-2xl mb-4 text-center">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div>
            <label className="block mb-1">Username</label>
            <input
              type="text"
              className="w-full border p-2 rounded"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          {/* Email */}
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              className="w-full border p-2 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {/* Password */}
          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              className="w-full border p-2 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            Register
          </button>
        </form>
        {/* Link to Login page */}
        <p className="mt-4 text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;