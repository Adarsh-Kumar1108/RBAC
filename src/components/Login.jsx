import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Admin");
  const [error, setError] = useState("");

  // Simulated user data for authentication (usually, this should be handled via an API)
  const users = [
    { username: "admin", password: "admin123", role: "Admin" },
    { username: "editor", password: "editor123", role: "Editor" },
    { username: "viewer", password: "viewer123", role: "Viewer" },
  ];

  const handleLogin = () => {
    // Simulate login validation logic here
    setUsername("");
    setPassword("");
  };

  return (
    <div className="h-screen bg-gray-100 flex items-start justify-center pt-10">
      <div className="bg-white shadow-md rounded-md p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Login
        </h1>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* Username */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-600 mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-600 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Role Selection */}
        <div className="mb-4">
          <label htmlFor="role" className="block text-gray-600 mb-2">
            Role
          </label>
          <select
            id="role"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="Admin">Admin</option>
            <option value="Editor">Editor</option>
            <option value="Viewer">Viewer</option>
          </select>
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Log In
        </button>

        {/* Already Have an Account */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <button
              className="text-blue-500 hover:underline"
              onClick={() => alert("Redirect to sign-up page")} // Placeholder for navigation
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
