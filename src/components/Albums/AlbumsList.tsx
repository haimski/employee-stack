import React, { useEffect, useState, lazy, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAlbums } from "../../features/albumsSlice";
import { fetchUsers } from "../../features/usersSlice";
import { Card } from "@mui/material";
// import { GenericModal, DialogBox } from '../common';
import { fetchPhotos } from "../../features/photosSlice";
const DialogBox = lazy(() => import('../../common/generic/DialogBox'));

interface AlbumsListProps {
    albums: any;
    loading: boolean;
    error: any;
    users: any;
    photos: any;
    openModal: boolean;
    selectedAlbum: Object;
    selectedAlbumTitle: string;
}

const AlbumsList = () => {
    const dispatch: any = useDispatch();
    const { albums, loading, error } = useSelector((state: any) => state.albums);
    const { users } = useSelector((state: any) => state.items);
    const { photos } = useSelector((state: any) => state.photos);
    const [openModal, setOpenModal] = React.useState(false);
    const [selectedAlbum, setSelectedAlbum] = React.useState(null);
    const [selectedAlbumTitle, setSelectedAlbumTitle] = React.useState('');

    useEffect(() => {
        dispatch(fetchAlbums());
        dispatch(fetchUsers());
        dispatch(fetchPhotos());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const handleClose = () => {
        setOpenModal(false);
        setSelectedAlbum(null);
    }

    const handleSelectedAlbum = (albumId: any, albumTitle: any) => {
        const chosenAlbum: any = (
            <ul>
                {photos?.map((photo: any, index: any) => {
                    if (photo.albumId === albumId) {
                        return (
                            <li key={index}>
                                <div>{photo.title}</div>
                                <div>
                                    <img src={photo.thumbnailUrl} alt={photo.alt}/>
                                </div>
                            </li>
                        )
                    }})}
                    </ul>);
        setSelectedAlbum(chosenAlbum);
        setSelectedAlbumTitle(albumTitle);
        setOpenModal(true);
    }

    const getUserAlbums = (userId: any) => {
        const albumsPerUser = albums?.filter((album: any) => album.id === userId);
        return albumsPerUser.map((album: any, index: any) => (
            <li key={index}>
                <span
                    className="mt-2 peer-invalid:visible text-blue-500 text-sm cursor-pointer"
                    onClick={() => handleSelectedAlbum(album.id, album.title)}
                >
                    {album.title}
                </span>
            </li>
        ))
    };

    const styleMotherFucker = {'height': '150px'};

    return (
        <div>
            <h1 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Galleries</h1>
            <ul className="grid grid-rows-4 grid-flow-col gap-4">
                {users?.map((user: any, index: any) => (
                    <li key={index}>
                        <Card style={styleMotherFucker} className="p-4">
                            <h2>{user.name}</h2>
                            <ul>{getUserAlbums(user.id)}</ul>
                        </Card>
                    </li>
                ))}
            </ul>
            <DialogBox
                open={openModal}
                handleClose={() => handleClose()}
                title={selectedAlbumTitle}
                content={selectedAlbum}
            />
            <Suspense fallback={<div>Loading...</div>}></Suspense>
        </div>
    );
}

export default AlbumsList;