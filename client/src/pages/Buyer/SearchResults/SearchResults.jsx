import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { searchProducts } from "../../../services/productService";
import ProductSearchFilter from "../../../components/ProductSearchFilter/ProductSearchFilter";
import "./SearchResults.css";

const useQuery = () => new URLSearchParams(useLocation().search);

const SearchResults = () => {
  const query = useQuery().get("q");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (query) {
      setLoading(true);
      searchProducts(query)
        .then((data) => {
          setResults(data);
          setFilteredProducts(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Search error", err);
          setLoading(false);
        });
    }
  }, [query]);

  return (
    <>
      <Header />
      <div className="search-results-page">
        <h2 className="results-heading">
          Search Results for: <span>"{query}"</span>
        </h2>
        <div className="search-layout">
          <ProductSearchFilter
            products={results}
            onResults={setFilteredProducts}
          />
          <div className="results-grid">
            {loading ? (
              <p>Loading...</p>
            ) : filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product._id} className="product-card">
                  <img
                    src={product.imageUrl || "/placeholder.jpg"}
                    alt={product.name}
                    className="product-image"
                  />
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-meta">
                    {product.brand} | {product.model}
                  </p>
                  <p className="product-price">₹{product.price}</p>
                </div>
              ))
            ) : (
              <p>No matching products found.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchResults;
