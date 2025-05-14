// client/src/services/sellerService.js

const SELLERS_URL = 'http://localhost:5000/api/sellers'; // For public seller listing (TrustedSeller, registration)
const DASHBOARD_URL = 'http://localhost:5000/api/seller'; // For protected seller dashboard/profile routes

// Public: Fetch all trusted sellers (for listing)
export const fetchSellers = async () => {
    const response = await fetch(SELLERS_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch sellers');
    }
    return await response.json();
};

// Protected: Fetch dashboard data
export const fetchSellerDashboard = async (token) => {
    const response = await fetch(`${DASHBOARD_URL}/dashboard`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    if (!response.ok) {
        throw new Error('Failed to fetch seller dashboard');
    }
    return await response.json();
};

// Protected: Fetch seller profile
export const getSellerProfile = async (token) => {
    const res = await fetch(`${DASHBOARD_URL}/profile`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if (!res.ok) throw new Error('Failed to fetch profile');
    return await res.json();
};

// Protected: Update seller profile
export const updateSellerProfile = async (formData, token) => {
    const res = await fetch(`${DASHBOARD_URL}/profile`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: formData,
    });
    if (!res.ok) throw new Error('Failed to update profile');
    return await res.json();
};
