import axios from "axios";

export const getAllComments = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
        return response.data;
    } catch (error) {
        console.error('Error fetching comments', error);
        throw error;
    }
}