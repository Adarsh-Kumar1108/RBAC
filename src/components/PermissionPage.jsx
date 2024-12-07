import React, { useState } from "react";

const PermissionsPage = () => {
  // State to manage permissions
  const [permissions, setPermissions] = useState([
    { name: "Access Admin Panel", description: "Admins can read, write, and delete." },
    { name: "Edit Content", description: "Users can read and write content." },
    { name: "View Dashboard", description: "Viewers can only read." },
  ]);

  // State to handle new permission input
  const [newPermissionName, setNewPermissionName] = useState("");
  const [newPermissionDescription, setNewPermissionDescription] = useState("");

  // Function to handle adding a new permission
  const addPermission = () => {
    if (newPermissionName.trim() && newPermissionDescription.trim()) {
      setPermissions([
        ...permissions,
        { name: newPermissionName, description: newPermissionDescription },
      ]);
      setNewPermissionName(""); // Clear name input
      setNewPermissionDescription(""); // Clear description input
    } else {
      alert("Both permission name and description are required.");
    }
  };

  // Function to handle deleting a permission
  const deletePermission = (index) => {
    const updatedPermissions = permissions.filter((_, i) => i !== index);
    setPermissions(updatedPermissions);
  };

  return (
    <div className="h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">
        Permissions Management
      </h1>

      <div className="bg-white shadow-md rounded-md p-6 mb-6">
        {/* Add Permission Section */}
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Add New Permission
        </h2>
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="text"
            value={newPermissionName}
            onChange={(e) => setNewPermissionName(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter permission name"
          />
          <input
            type="text"
            value={newPermissionDescription}
            onChange={(e) => setNewPermissionDescription(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter permission description"
          />
          <button
            onClick={addPermission}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Add
          </button>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-md p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Defined Permissions
        </h2>

        {/* Permission Table */}
        <div className="overflow-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2">Permission</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {permissions.map((permission, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-4 py-2">{permission.name}</td>
                  <td className="px-4 py-2">{permission.description}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => deletePermission(index)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                    >
                      Delete
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

export default PermissionsPage;
