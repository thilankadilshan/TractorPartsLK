// src/components/FilterComponent.jsx
import React, { useEffect, useState } from "react";
import { filterProducts } from "../../services/productService";
import "./ProductSearchFilter.css";

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

const FilterComponent = ({ onResults }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleFilter = async () => {
    const filters = {
      ...(brand && { brand }),
      ...(model && { model }),
      ...(minPrice && { minPrice }),
      ...(maxPrice && { maxPrice }),
    };

    try {
      const data = await filterProducts(filters);
      onResults(data);
    } catch (error) {
      console.error("Filter failed:", error);
    }
  };

  useEffect(() => {
    handleFilter(); // Load products initially or when filter changes
  }, []);

  return (
    <div className="filter-box">
      <h3>Filter Products</h3>
      <input
        type="text"
        placeholder="Search name, brand, model..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleFilter()}
      />
      <select
        value={brand}
        onChange={(e) => {
          setBrand(e.target.value);
          setModel(""); // reset model when brand changes
        }}
      >
        <option value="">All Brands</option>
        {Object.keys(brandModelMap).map((b) => (
          <option key={b} value={b}>
            {b}
          </option>
        ))}
      </select>

      <select
        value={model}
        onChange={(e) => setModel(e.target.value)}
        disabled={!brand}
      >
        <option value="">All Models</option>
        {brand &&
          brandModelMap[brand]?.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
      </select>

      <input
        type="number"
        placeholder="Min Rs"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Max Rs"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />

      <button onClick={handleFilter}>Apply Filters</button>
    </div>
  );
};

export default FilterComponent;
