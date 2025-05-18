import React, { useState, useEffect, useContext } from "react";
import "./styles/manageUsers.css";
import { getAllUsers, verifySeller } from "../../services/adminService";
import { AuthContext } from "../../context/AuthContext.jsx";

const ManageUsers = () => {
  const { user, loading } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [selectedRole, setSelectedRole] = useState("all");
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [error, setError] = useState(null);

  // Extract token directly from localStorage, fallback if not in user object
  const token = user?.token || localStorage.getItem("token");

  useEffect(() => {
    const fetchUsers = async () => {
      if (!token) {
        console.warn("No token found, aborting fetchUsers");
        return;
      }

      try {
        const data = await getAllUsers(token);
        console.log("✅ Users received from backend:", data); // Check if data arrives
        if (Array.isArray(data)) {
          setUsers(data);
          setError(null);
        } else {
          setError("Invalid data format received");
          setUsers([]);
        }
      } catch (err) {
        console.error(
          "❌ Failed to load users",
          err.response?.data || err.message
        );
        setError("Failed to load users");
        setUsers([]);
      }
    };

    fetchUsers();
  }, [token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>You must be logged in to view this page.</div>;
  }

  const filteredUsers = users.filter((u) =>
    selectedRole === "all" ? true : u.role === selectedRole
  );

  const handleVerifySeller = async (userId) => {
    try {
      await verifySeller(userId, token);
      alert("Seller Verified");
      setUsers((prev) =>
        prev.map((u) => (u._id === userId ? { ...u, isVerified: true } : u))
      );
    } catch (err) {
      console.error("Verification failed", err);
      alert("Seller verification failed");
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete user?")) {
      setUsers(users.filter((u) => u._id !== id));
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setFormData({
      name: `${user.firstName} ${user.lastName}`,
      email: user.email,
    });
  };

  const handleUpdate = () => {
    setUsers((prev) =>
      prev.map((u) =>
        u._id === editingUser._id
          ? { ...u, name: formData.name, email: formData.email }
          : u
      )
    );
    setEditingUser(null);
  };

  return (
    <div className="manage-users-wrapper">
      <h1>Manage Users</h1>

      <div className="role-buttons">
        <button onClick={() => setSelectedRole("all")}>All</button>
        <button onClick={() => setSelectedRole("admin")}>Admins</button>
        <button onClick={() => setSelectedRole("user")}>Buyers</button>
        <button onClick={() => setSelectedRole("seller")}>Sellers</button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

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
          {filteredUsers.length === 0 && (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No users found.
              </td>
            </tr>
          )}
          {filteredUsers.map((u) => (
            <tr key={u._id}>
              <td>
                {u.firstName} {u.lastName}
              </td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td>
                <button className="btn-edit" onClick={() => handleEdit(u)}>
                  Edit
                </button>
                <button
                  className="btn-delete"
                  onClick={() => handleDelete(u._id)}
                >
                  Delete
                </button>
                {u.role === "seller" &&
                  (u.isVerified ? (
                    <span style={{ color: "green", marginLeft: 10 }}>
                      Verified
                    </span>
                  ) : (
                    <button
                      className="btn-verify"
                      onClick={() => handleVerifySeller(u._id)}
                    >
                      Verify
                    </button>
                  ))}
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
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
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
