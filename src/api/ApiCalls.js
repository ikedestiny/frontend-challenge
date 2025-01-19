import axios from 'axios';

const url = "https://api.thecatapi.com/v1/images";
const apiKey = "live_porff2lHHviE13tzdBGPVP07043ceA0185JTZ6b2mngPSBEXyJuuDCBKVtRhvNVg"; // Replace with your actual API key if needed

// Function to get a random cat
export const get_random_cat = async () => {
    try {
        const response = await axios.get(url + '/search', {
            headers: {
                'x-api-key': apiKey, // Add API key if required
            },
        });
        return response.data; // Return the data directly
    } catch (error) {
        console.error("Error fetching random cat:", error);
        throw error; // Re-throw the error to handle it elsewhere
    }
};

// Function to get 10 random cats
export const get_random_cats = async (cats) => {
    try {
        const response = await axios.get(`${url}/search?limit=${cats}`, {
            headers: {
                'x-api-key': apiKey, // Add API key if required
            },
        });
        return response.data; // Return the data directly
    } catch (error) {
        console.error("Error fetching 10 random cats:", error);
        throw error; // Re-throw the error to handle it elsewhere
    }
};



// Function to get a random cat
export const get_cat_by_id = async (id) => {
    try {
        const response = await axios.get(url + `/${id}`, {
            headers: {
                'x-api-key': apiKey, // Add API key if required
            },
        });
        return response.data; // Return the data directly
    } catch (error) {
        console.error("Error fetching random cat:", error);
        throw error; // Re-throw the error to handle it elsewhere
    }
};