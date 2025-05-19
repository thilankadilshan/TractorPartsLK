import React from "react";
import "./styles/ManageProducts.css";

const products = [
  {
    _id: "682a7259f9fdc0dec0f41e00",
    name: "BANJO BOLT",
    description: "HEL Stainless Steel -3 AN Banjo Bolt",
    price: 2300,
    partNumber: "H150-03C",
    brand: "TAFE",
    model: "TAFE 45 DI DRUM BRAKE",
    image: "uploads/products/1747612249041.jpg",
  },
  {
    _id: "682a96fec827b8c28b7c3022",
    name: "Brake Components (disk brake)",
    description:
      "disk brake, disc brake Components for Vintage & Modern tractors",
    price: 12000,
    partNumber: "hrv-22nn67",
    brand: "Massey Ferguson",
    model: "Massey Ferguson 1552",
    image: "uploads/products/1747621630131.jpg",
  },
  {
    _id: "682a98aec827b8c28b7c305d",
    name: "Rear Wheel & Axle",
    description:
      "reel Anglo Agriparts UK stocks rear wheel and axle components",
    price: 44000,
    partNumber: "tu/f-22n4p",
    brand: "SONALIKA",
    model: "SONALIKA DI 75RX 2WD",
    image: "uploads/products/1747622062179.png",
  },
  {
    _id: "682aa3400d0c32a694c2c388",
    name: 'Rear Wheel Nuts - 9/16" UNF',
    description: "spotlight, spot",
    price: 80,
    partNumber: "A59157",
    brand: "John Deere",
    model: "John Deere JD-5045D-WRT",
    image: "uploads/products/1747624768991.jpg",
  },
  {
    _id: "682aa4e20d0c32a694c2c3be",
    name: "Air Filter kubota",
    description:
      "A Kubota air filter is a critical component that filters air before it…",
    price: 8000,
    partNumber: "A40864",
    brand: "Kubota",
    model: "Kubota EK3 - 471 4WD",
    image: "uploads/products/1747625186121.jpg",
  },
];

const ManageProducts = () => {
  return (
    <div className="manage-products">
      <h1>Manage Products</h1>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Part Number</th>
            <th>Price (₹)</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p._id}>
              <td>
                <img
                  src={p.image}
                  alt={p.name}
                  className="product-image"
                  loading="lazy"
                />
              </td>
              <td>{p.name}</td>
              <td>{p.brand}</td>
              <td>{p.model}</td>
              <td>{p.partNumber}</td>
              <td>{p.price.toLocaleString()}</td>
              <td className="description-cell">{p.description}</td>
              <td>
                <button className="btn approve-btn">Approve</button>
                <button className="btn delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProducts;
