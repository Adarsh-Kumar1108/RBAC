import React, { useState } from "react";

const RolesPage = () => {
  // State for managing users and their roles
  const [users, setUsers] = useState([
    { id: 1, name: "Raj", role: "Admin", state: "Active" },
    { id: 2, name: "Komal", role: "User", state: "Inactive" },
    { id: 3, name: "Mohan", role: "Viewer", state: "Active" },
  ]);

  // Function to update the role of a user
  const updateRole = (id, newRole) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, role: newRole } : user
    );
    setUsers(updatedUsers);
  };

  // Function to toggle user state (Active/Inactive)
  const toggleState = (id) => {
    const updatedUsers = users.map((user) =>
      user.id === id
        ? { ...user, state: user.state === "Active" ? "Inactive" : "Active" }
        : user
    );
    setUsers(updatedUsers);
  };

  return (
    <div className="h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">
        Roles Management
      </h1>

      <div className="bg-white shadow-md rounded-md p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Assign Roles
        </h2>

        {/* Roles Table */}
        <div className="overflow-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Role</th>
                <th className="px-4 py-2">State</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-100">
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">
                    <select
                      value={user.role}
                      onChange={(e) => updateRole(user.id, e.target.value)}
                      className="px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Admin">Admin</option>
                      <option value="User">User</option>
                      <option value="Viewer">Viewer</option>
                    </select>
                  </td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-3 py-1 rounded-full ${
                        user.state === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {user.state}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => toggleState(user.id)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                    >
                      Toggle State
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RolesPage;
