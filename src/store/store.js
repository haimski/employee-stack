import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/usersSlice.ts';
import tasksReducer from '../features/tasksSlice.ts';
import commentsReducer from '../features/commentsSlice.ts';
import photosReducer from '../features/photosSlice.ts';
import postsReducer from '../features/postsSlice.ts';
import albumsReducer from '../features/albumsSlice.ts';

const store = configureStore({
    reducer: {
        items: usersReducer, // Add additional slices here as needed
        tasks: tasksReducer,
        photos: photosReducer,
        posts: postsReducer,
        albums: albumsReducer,
        comments: commentsReducer,
    },
});

export default store;
