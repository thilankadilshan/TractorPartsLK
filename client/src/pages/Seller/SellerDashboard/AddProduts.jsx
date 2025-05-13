import React, { useState } from "react";
import { addProduct } from "../../../services/productService";
import "./styles/AddProduct.css";

const brandModelMap = {
  TAFE: [
    "TAFE 45 DI DRUM BRAKE",
    "TAFE 45 DI DISC BRAKE",
    "TAFE 7250 2WD",
    "TAFE 5245 4WD",
    "TAFE 45DI Side Shift",
    "TAFE 9500",
    "TAFE 8515 Magna",
    "TAFE 9515 Magna",
    "TAFE Dynatrack",
  ],
  SONALIKA: [
    "SONALIKA DI 50RX 2WD",
    "SONALIKA DI 50RX 4WD",
    "SONALIKA 60RX",
    "SONALIKA DI 75RX 2WD",
    "SONALIKA S 90",
    "SONALIKA GT 22",
    "SONALIKA GT 26",
  ],
  Mahindra: [
    "MAHINDRA 595 DI NST",
    "MAHINDRA 575 4WD",
    "MAHINDRA 9500 4WD",
    "MAHINDRA 755 4WD",
  ],
  "John Deere": [
    "John Deere JD-5045D-WRT",
    "John Deere 5047D",
    "John Deere 5050D",
  ],
  Kubota: ["Kubota L4508 4WD", "Kubota EK3 - 471 4WD", "Kubota L3408 4WD"],
  "Massey Ferguson": [
    "Massey Ferguson 1552",
    "Massey Ferguson 1650E",
    "Massey Ferguson 4708",
    "Massey Ferguson 5710",
    "Massey Ferguson 6713",
    "Massey Ferguson 7615",
  ],
};

const AddProduct = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    partNumber: "",
    brand: "",
    model: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    const token = localStorage.getItem("token");
    const formData = new FormData();

    Object.entries(form).forEach(([key, value]) => formData.append(key, value));
    if (image) formData.append("image", image);

    try {
      await addProduct(formData, token);
      setMessage("Product added successfully!");
      setForm({
        name: "",
        description: "",
        price: "",
        partNumber: "",
        brand: "",
        model: "",
      });
      setImage(null);
      setPreview(null);
    } catch (err) {
      console.error(err);
      setError("Failed to add product");
    }
  };

  return (
    <div className="add-product-container">
      <h2>Add New Product</h2>

      {message && <p className="success">{message}</p>}
      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit} className="add-product-form">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="description"
          placeholder="Product Description"
          value={form.description}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="partNumber"
          placeholder="Part Number"
          value={form.partNumber}
          onChange={handleInputChange}
          required
        />

        <select
          name="brand"
          value={form.brand}
          onChange={(e) => {
            handleInputChange(e);
            setForm((prev) => ({ ...prev, model: "" })); // reset model
          }}
          required
        >
          <option value="">Select Tractor Brand</option>
          {Object.keys(brandModelMap).map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>

        <select
          name="model"
          value={form.model}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Tractor Model</option>
          {brandModelMap[form.brand]?.map((model) => (
            <option key={model} value={model}>
              {model}
            </option>
          ))}
        </select>

        <input type="file" accept="image/*" onChange={handleImageChange} />
        {preview && <img src={preview} alt="Preview" className="preview-img" />}

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
