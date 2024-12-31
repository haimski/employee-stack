import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllAlbums } from "../../api/albums";

// Thunk for fetching items
export const fetchAlbums = createAsyncThunk('items/fetchAlbums', async (_, thunkAPI) => {
    try {
        let data = await getAllAlbums();
        return data;
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
    }
});

const albumsSlice = createSlice({
    name: 'albums',
    initialState: {
        albums: [],
        loading: false,
        error: null,
    },
    reducers: {
        // Add synchronous reducers here if needed
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAlbums.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAlbums.fulfilled, (state, action) => {
                state.loading = false;
                state.albums = action.payload;
            })
            .addCase(fetchAlbums.rejected, (state: any, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default albumsSlice.reducer;
