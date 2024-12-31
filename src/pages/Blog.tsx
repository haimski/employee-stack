import React from "react";
import { PostsList } from "../components";
import { Navbar } from "../common";
import { Container } from "@mui/material";

const Blog = () => (
    <>
        <Navbar />
        <Container className="mt-20">
            <PostsList />
        </Container>
    </>
)

export default Blog;