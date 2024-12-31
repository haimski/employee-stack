import axios from "axios";

export const getAllAlbums = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
        return response.data;
    } catch (error) {
        console.error('Error fetching albums', error);
        throw error;
    }
}