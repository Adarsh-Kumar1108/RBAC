import React from "react";

const AdminDashboard = () => {
  return (
    <div className="h-[40vh] mt-6 p-8 bg-gray-100">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <div className="bg-white shadow-md rounded-md p-8">
          <h2 className="text-xl font-semibold text-gray-700">Users Overview</h2>
          <p className="text-gray-600 mt-2">Total Users: 3</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-8">
          <h2 className="text-xl font-semibold text-gray-700">Active Roles</h2>
          <p className="text-gray-600 mt-2">Admin, User, Viewer</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-8">
          <h2 className="text-xl font-semibold text-gray-700">System Logs</h2>
          <p className="text-gray-600 mt-2">Last Login: 1 minutes ago</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
