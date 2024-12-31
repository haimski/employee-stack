import axios from "axios";

export const getPhotos = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
        return response.data;
    } catch (error) {
        console.error('Error fetching photos', error);
        throw error;
    }
}