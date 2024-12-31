import React from 'react';
import { UserList, TasksList, PostsList, PhotosList, CommentsList, AlbumsList } from '../components';
import { Navbar } from '../common';
import Container from '@mui/material/Container';

const HomePage = () => (
    <div className="container">
        <Navbar />
        <Container className="mt-20">
                <UserList />
                <TasksList />
                <PostsList />
                <PhotosList />
                <CommentsList />
                <AlbumsList />
        </Container>
    </div>
);

export default HomePage