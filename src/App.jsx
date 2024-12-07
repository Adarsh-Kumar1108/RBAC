import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import UsersPage from "./components/UserPage";
import PermissionPage from "./components/PermissionPage";
import AdminDashboard from "./components/AdminDashboard";
import RolesPage from "./components/RolesPage";
import Login from "./components/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div>
        {!isLoggedIn && <Navbar />}
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/permissions" element={<PermissionPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/roles" element={<RolesPage />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
