import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTasks } from '../api/tasks.ts';

// Thunk for fetching items
export const fetchTasks = createAsyncThunk('items/fetchTasks', async (_, thunkAPI) => {
    try {
        let data = await getTasks();
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
    }
});

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        tasks: [],
        loading: false,
        error: null,
    },
    reducers: {
        // Add synchronous reducers here if needed
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.loading = false;
                state.tasks = action.payload;
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default usersSlice.reducer;
