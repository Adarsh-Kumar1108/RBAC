import React from "react";
import AdminDashboard from "./AdminDashboard";

const LandingPage = () => {
  return (
    <div className="h-screen w-screen flex items-start pt-4 justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to RBAC System</h1>
        <p className="text-xl text-gray-600 mt-1">
          Manage roles, permissions, and users with ease.
        </p>
        <AdminDashboard/>
      </div>
    </div>
  );
};

export default LandingPage;
