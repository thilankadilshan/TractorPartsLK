import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { searchProducts } from "../../../services/productService";
import ProductSearchFilter from "../../../components/ProductSearchFilter/ProductSearchFilter";
import "./SearchResults.css"; // 🧠 custom page-only styles

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
          setFilteredProducts(data); // also show in filter
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
      <div className="search-results-page p-6 space-y-8 bg-gray-50 min-h-screen">
        <h2 className="text-2xl font-semibold">
          Search Results for: <span className="text-blue-600">"{query}"</span>
        </h2>

        <ProductSearchFilter
          products={results}
          onResults={setFilteredProducts}
        />

        {loading ? (
          <p className="text-gray-600">Loading...</p>
        ) : filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <div key={product._id} className="product-card">
                <img
                  src={product.imageUrl || "/placeholder.jpg"}
                  alt={product.name}
                  className="product-image"
                />
                <h3 className="product-title">{product.name}</h3>
                <p className="product-meta">
                  {product.brand} | {product.model}
                </p>
                <p className="product-price">Rs. {product.price}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No matching products found.</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default SearchResults;
