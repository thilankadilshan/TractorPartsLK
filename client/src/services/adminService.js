import axios from "axios";

const API_URL = "/api/admin";

export const getAllUsers = async (token) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axios.get(`${API_URL}/users`, config);
    return response.data; // array of users expected here
};

export const verifySeller = async (userId, token) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axios.put(`${API_URL}/verify-seller/${userId}`, {}, config);
    return response.data;
};
