import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPhotos } from "../api/photos";

// Thunk for fetching items
export const fetchPhotos = createAsyncThunk('items/fetchPhotos', async (_, thunkAPI) => {
    try {
        let data = await getPhotos();
        return data;
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
    }
});

const photosSlice = createSlice({
    name: 'users',
    initialState: {
        photos: [],
        loading: false,
        error: null,
    },
    reducers: {
        // Add synchronous reducers here if needed
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPhotos.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPhotos.fulfilled, (state, action) => {
                state.loading = false;
                state.photos = action.payload;
            })
            .addCase(fetchPhotos.rejected, (state:any, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default photosSlice.reducer;
