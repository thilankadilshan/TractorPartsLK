import axios from "axios";

// Correct API endpoint for public product search
const PRODUCT_API = "http://localhost:5000/api/products";
const SELLER_API = "http://localhost:5000/api/seller"; // for adding product

// ✅ For adding products (with auth)
export const addProduct = async (formData, token) => {
    const config = {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.post(`${SELLER_API}/add-product`, formData, config);
    return response.data;
};

// ✅ FIXED: Now points to correct search route
export const searchProducts = async (query) => {
    const response = await axios.get(`${PRODUCT_API}/search?q=${encodeURIComponent(query)}`);
    return response.data;
};

export const filterProducts = async (filters) => {
    const queryString = new URLSearchParams(filters).toString();
    const response = await axios.get(`http://localhost:5000/api/products/filter?${queryString}`);
    return response.data;
};
