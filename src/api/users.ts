import axios from "axios";

export const getUsersApi = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return response.data;
    } catch (error) {
        console.log('Error fetching users', error);
        throw error;
    }
};

export const createUserApi = async (userData: any) => {
    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/users', userData);
        return response.data;
    } catch (error) {
        console.log('Error creating user', error);
    }
}

export const updateUserApi = async (user: any) => {
    try {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, user);
        return response.data;
    } catch (error) {
        console.log('Error updating user', error);
    }
}

export const deleteUserApi = async (userId: string|number) => {
    try {
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
        return response.status === 200 ? userId : { message: 'Failed to delete user' };;
    } catch (error) {
        console.log('Error deleting user', error);
    }
}