import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPosts } from "../api/posts";

// Thunk for fetching items
export const fetchPosts = createAsyncThunk<any[], void, { rejectValue: string }>('items/fetchPosts', async (_, thunkAPI) => {
    try {
        let data:any = await getPosts();
        return data;
    } catch (error:any) {
        return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
    }
});

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        loading: false,
        error: null,
    },
    reducers: {
        // Add synchronous reducers here if needed
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state:any) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPosts.fulfilled, (state:any, action) => {
                state.loading = false;
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state:any, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default postsSlice.reducer;
