import React from "react";
import "./styles/ManageProducts.css";

const ManageProducts = () => {
  const products = [
    { id: 1, name: "Clutch Plate", stock: 10 },
    { id: 2, name: "Brake Drum", stock: 5 },
    { id: 3, name: "Oil Filter", stock: 20 },
  ];

  return (
    <div className="manage-products">
      <h2>Manage Products</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - Stock: {p.stock}
            <button>Edit</button>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageProducts;
