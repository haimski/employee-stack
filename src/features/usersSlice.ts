import {createSlice, createAsyncThunk, GetThunkAPI, AsyncThunk} from '@reduxjs/toolkit';
import {
    getUsersApi,
    createUserApi,
    updateUserApi,
    deleteUserApi
} from '../api/users';
import { apiCallDecorator } from './../utils';

export const fetchUsers = createAsyncThunk('items/fetchUsers', async (_, thunkAPI) => {
    return apiCallDecorator(getUsersApi, [], thunkAPI);
});

export const addUser = createAsyncThunk('items/addUser', async (_: any, thunkAPI) => {
    return apiCallDecorator(createUserApi, [_], thunkAPI);
});

export const updateUser = createAsyncThunk('items/updateUser', async (user: any, thunkAPI) => {
    return apiCallDecorator(updateUserApi, [user], thunkAPI);
});

export const deleteUser = createAsyncThunk('items/deleteUser', async (userId: any, thunkAPI) => {
    return apiCallDecorator(deleteUserApi, [userId], thunkAPI);
});



const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    reducers: {
        // Add synchronous reducers here if needed
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state:any, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            // add user
            .addCase(addUser.pending, (state:any) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addUser.fulfilled, (state:any, action:any) => {
                state.loading = false;
                state.users.push(action.payload);
            })
            .addCase(addUser.rejected, (state:any, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            // delete user
            .addCase(deleteUser.pending, (state: any) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteUser.fulfilled, (state: any, action: any) => {
                state.loading = false;
                state.users = state.users.filter((user: any) => user.id !== action.payload);
            })
            .addCase(deleteUser.rejected, (state: any, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            // update user
            .addCase(updateUser.pending, (state: any) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateUser.fulfilled, (state: any, action: any) => {
                state.loading = false;
                const index = state.users.findIndex((user: any) => user.id === action.payload.id);
                if (index !== -1) {
                    state.users[index] = action.payload;
                }
            })
            .addCase(updateUser.rejected, (state: any, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default usersSlice.reducer;
