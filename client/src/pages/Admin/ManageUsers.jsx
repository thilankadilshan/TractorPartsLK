import React, { useState } from "react";
import "./styles/manageUsers.css";

const ManageUsers = () => {
  const allUsers = [
    { id: 1, name: "Admin One", email: "admin1@example.com", role: "admin" },
    { id: 2, name: "User A", email: "usera@example.com", role: "buyer" },
    { id: 3, name: "Seller B", email: "sellerb@example.com", role: "seller" },
    { id: 4, name: "User B", email: "userb@example.com", role: "buyer" },
    { id: 5, name: "Admin Two", email: "admin2@example.com", role: "admin" },
  ];

  const [users, setUsers] = useState(allUsers);
  const [selectedRole, setSelectedRole] = useState("all"); // initially show all users
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "" });

  // Filter users based on role
  const filteredUsers = users.filter((user) => {
    if (selectedRole === "all") return true;
    return user.role === selectedRole;
  });

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((u) => u.id !== id));
    }
  };

  const handleRoleChange = (id, newRole) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, role: newRole } : u))
    );
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setFormData({ name: user.name, email: user.email });
  };

  const handleUpdate = () => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === editingUser.id
          ? { ...u, name: formData.name, email: formData.email }
          : u
      )
    );
    setEditingUser(null);
  };

  return (
    <div className="manage-users-wrapper">
      <h1>Manage Users</h1>

      {/* Role Filter Buttons */}
      <div className="role-buttons">
        <button onClick={() => setSelectedRole("all")}>All</button>
        <button onClick={() => setSelectedRole("admin")}>Admins</button>
        <button onClick={() => setSelectedRole("buyer")}>Buyers</button>
        <button onClick={() => setSelectedRole("seller")}>Sellers</button>
      </div>

      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((u) => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td>
                <button className="btn-edit" onClick={() => handleEdit(u)}>
                  Edit
                </button>
                <button
                  className="btn-delete"
                  onClick={() => handleDelete(u.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingUser && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit User</h2>
            <label>
              Name:
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            </label>
            <div className="modal-buttons">
              <button onClick={handleUpdate}>Save</button>
              <button onClick={() => setEditingUser(null)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageUsers;
