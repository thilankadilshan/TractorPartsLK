import React from "react";

const ManageProducts = () => {
  const products = [
    { id: 1, name: "Tractor Engine", status: "pending" },
    { id: 2, name: "Hydraulic Pump", status: "approved" },
  ];

  return (
    <div>
      <h1>Manage Products</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.status}</td>
              <td>
                <button>Approve</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProducts;
