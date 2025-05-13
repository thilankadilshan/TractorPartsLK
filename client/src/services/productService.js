import axios from "axios";

const API_URL = "http://localhost:5000/api/seller"; // 👈 Include backend URL

export const addProduct = async (formData, token) => {
    const config = {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.post(`${API_URL}/add-product`, formData, config);
    return response.data;
};
