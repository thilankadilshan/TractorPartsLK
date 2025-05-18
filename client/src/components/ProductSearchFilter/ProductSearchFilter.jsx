import React, { useEffect, useState } from "react";
import { searchProducts, filterProducts } from "../../services/productService";
import "./ProductSearchFilter.css";

const ProductSearchFilter = ({ onResults }) => {
  const [query, setQuery] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [allProducts, setAllProducts] = useState([]);

  // Load all products to extract unique brands/models for dropdowns
  useEffect(() => {
    const loadProducts = async () => {
      const results = await searchProducts(""); // get all
      setAllProducts(results);
    };
    loadProducts();
  }, []);

  const uniqueBrands = [
    ...new Set(allProducts.map((p) => p.brand).filter(Boolean)),
  ];
  const uniqueModels = [
    ...new Set(allProducts.map((p) => p.model).filter(Boolean)),
  ];

  const handleSearch = async () => {
    if (query.trim()) {
      const results = await searchProducts(query);
      onResults(results);
    } else {
      const results = await filterProducts({
        brand,
        model,
        minPrice,
        maxPrice,
      });
      onResults(results);
    }
  };

  return (
    <div className="product-search-filter">
      <div className="p-4 bg-white shadow-md rounded-xl grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        <input
          type="text"
          placeholder="Search by name, brand, model, ID..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 border rounded"
        />

        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">All Brands</option>
          {uniqueBrands.map((b, i) => (
            <option key={i} value={b}>
              {b}
            </option>
          ))}
        </select>

        <select
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">All Models</option>
          {uniqueModels.map((m, i) => (
            <option key={i} value={m}>
              {m}
            </option>
          ))}
        </select>

        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min ₹"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-1/2 p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Max ₹"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-1/2 p-2 border rounded"
          />
        </div>

        <button
          onClick={handleSearch}
          className="col-span-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Search / Filter
        </button>
      </div>
    </div>
  );
};

export default ProductSearchFilter;
