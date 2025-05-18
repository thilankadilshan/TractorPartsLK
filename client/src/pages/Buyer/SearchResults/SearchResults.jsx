import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { searchProducts } from "../../../services/productService";

const useQuery = () => new URLSearchParams(useLocation().search);

const SearchResults = () => {
  const query = useQuery().get("q");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (query) {
      setLoading(true);
      searchProducts(query)
        .then((data) => {
          setResults(data);
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
      <div className="p-4 min-h-screen bg-gray-50">
        <h2 className="text-xl font-semibold mb-4">
          Search Results for: <span className="text-blue-600">"{query}"</span>
        </h2>

        {loading ? (
          <p className="text-gray-600">Loading...</p>
        ) : results.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {results.map((product) => (
              <div
                key={product._id}
                className="border rounded-lg bg-white p-4 shadow hover:shadow-md transition"
              >
                <img
                  src={product.imageUrl || "/placeholder.jpg"}
                  alt={product.name}
                  className="w-full h-48 object-cover mb-3 rounded"
                />
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-gray-600 line-clamp-2">
                  {product.description}
                </p>
                <p className="text-green-600 font-semibold mt-2">
                  Rs. {product.price}
                </p>
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
