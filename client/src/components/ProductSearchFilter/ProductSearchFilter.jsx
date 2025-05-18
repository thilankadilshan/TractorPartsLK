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

  useEffect(() => {
    const loadProducts = async () => {
      const results = await searchProducts("");
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
    <div className="product-filter-sidebar">
      <h3 className="filter-title">Filter Products</h3>

      <input
        type="text"
        placeholder="Search by name, brand, model, ID..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="filter-input"
      />

      <select
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        className="filter-select"
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
        className="filter-select"
      >
        <option value="">All Models</option>
        {uniqueModels.map((m, i) => (
          <option key={i} value={m}>
            {m}
          </option>
        ))}
      </select>

      <div className="price-input-group">
        <input
          type="number"
          placeholder="Min Rs"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="filter-input"
        />
        <input
          type="number"
          placeholder="Max Rs"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="filter-input"
        />
      </div>

      <button onClick={handleSearch} className="filter-button">
        Apply Filters
      </button>
    </div>
  );
};

export default ProductSearchFilter;
