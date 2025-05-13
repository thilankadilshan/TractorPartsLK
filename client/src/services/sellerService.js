const API_URL = 'http://localhost:5000/api/sellers';

export const fetchSellers = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch sellers');
    }
    return await response.json();
};
