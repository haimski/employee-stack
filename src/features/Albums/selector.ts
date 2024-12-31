import { createSelector } from 'reselect';

const selectAlbumsState = (state: any) => state.albums;

export const selectAlbums = createSelector(
    selectAlbumsState,
    (state) => state.albums
);