import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllComments } from "../api/comments";

// Thunk for fetching items
export const fetchComments = createAsyncThunk('items/fetchComments', async (_, thunkAPI) => {
    try {
        let data = await getAllComments();
        return data;
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
    }
});

const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: [],
        loading: false,
        error: null,
    },
    reducers: {
        // Add synchronous reducers here if needed
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchComments.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchComments.fulfilled, (state, action) => {
                state.loading = false;
                state.comments = action.payload;
            })
            .addCase(fetchComments.rejected, (state: any, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default commentsSlice.reducer;
