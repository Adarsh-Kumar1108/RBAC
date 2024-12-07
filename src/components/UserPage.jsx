import React, { useState } from "react";

const UsersPage = () => {
  // State to manage users
  const [users, setUsers] = useState([
    { name: "Raj", role: "Admin", status: "Active" },
    { name: "Aman", role: "User", status: "Inactive" },
    { name: "Komal", role: "Viewer", status: "Active" },
  ]);

  // State to manage new user input
  const [newUserName, setNewUserName] = useState("");
  const [newUserRole, setNewUserRole] = useState("User");
  const [newUserStatus, setNewUserStatus] = useState("Active");

  // State to manage editing a user
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState("");
  const [editRole, setEditRole] = useState("User");
  const [editStatus, setEditStatus] = useState("Active");

  // Function to handle adding a new user
  const addUser = () => {
    if (newUserName.trim()) {
      setUsers([
        ...users,
        { name: newUserName, role: newUserRole, status: newUserStatus },
      ]);
      setNewUserName(""); // Clear input field
      setNewUserRole("User"); // Reset role to default
      setNewUserStatus("Active"); // Reset status to default
    } else {
      alert("User name cannot be empty.");
    }
  };

  // Function to handle deleting a user
  const deleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  // Function to handle editing a user
  const handleEdit = (index) => {
    const user = users[index];
    setEditIndex(index);
    setEditName(user.name);
    setEditRole(user.role);
    setEditStatus(user.status);
  };

  // Function to save the edited user details
  const saveEdit = () => {
    if (editName.trim()) {
      const updatedUsers = [...users];
      updatedUsers[editIndex] = {
        name: editName,
        role: editRole,
        status: editStatus,
      };
      setUsers(updatedUsers);
      setEditIndex(null);
      setEditName("");
      setEditRole("User");
      setEditStatus("Active");
    } else {
      alert("User name cannot be empty.");
    }
  };

  return (
    <div className="h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">
        Users Management
      </h1>

      {/* Add User Section */}
      <div className="bg-white shadow-md rounded-md p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Add New User</h3>
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="text"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter user name"
          />
          <select
            value={newUserRole}
            onChange={(e) => setNewUserRole(e.target.value)}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Admin">Admin</option>
            <option value="User">User</option>
            <option value="Viewer">Viewer</option>
          </select>
          <select
            value={newUserStatus}
            onChange={(e) => setNewUserStatus(e.target.value)}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <button
            onClick={addUser}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Add User
          </button>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-md p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">All Users</h2>

        {/* User List */}
        <div className="overflow-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 border border-gray-300">Name</th>
                <th className="px-4 py-2 border border-gray-300">Role</th>
                <th className="px-4 py-2 border border-gray-300">Status</th>
                <th className="px-4 py-2 border border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="text-center">
                  <td className="px-4 py-2 border border-gray-300">{user.name}</td>
                  <td className="px-4 py-2 border border-gray-300">{user.role}</td>
                  <td className="px-4 py-2 border border-gray-300">{user.status}</td>
                  <td className="px-4 py-2 border border-gray-300">
                    <button
                      onClick={() => handleEdit(index)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteUser(index)}
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

        {/* Edit User Section */}
        {editIndex !== null && (
          <div className="mt-6 space-y-4">
            <h3 className="text-lg font-semibold text-gray-700">Edit User</h3>
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
              <input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter user name"
              />
              <select
                value={editRole}
                onChange={(e) => setEditRole(e.target.value)}
                className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Admin">Admin</option>
                <option value="User">User</option>
                <option value="Viewer">Viewer</option>
              </select>
              <select
                value={editStatus}
                onChange={(e) => setEditStatus(e.target.value)}
                className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
              <button
                onClick={saveEdit}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                Save Changes
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Display Total Number of Users */}
      <div className="mt-4 text-gray-600">
        <p>Total Users: {users.length}</p>
      </div>
    </div>
  );
};

export default UsersPage;
