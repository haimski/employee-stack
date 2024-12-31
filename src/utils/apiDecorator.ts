const apiCallDecorator = async (apiCall:any, args: any = [], thunkAPI:any) => {
    try {
        const response = await apiCall(...args); // Call the external API function with arguments
        return response; // Extract and return the response data
    } catch (error:any) {
        const errorMessage = error.response?.data || error.message || 'Something went wrong';
        return thunkAPI.rejectWithValue(errorMessage); // Handle errors consistently
    }
};

export default apiCallDecorator;