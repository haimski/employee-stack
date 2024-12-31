import { AlbumsList } from "../components";
import { Navbar } from "../common";
import { Container } from "@mui/material";

const Gallery = () => (
    <>
        <Navbar />
        <Container className="mt-20">
            <AlbumsList />
        </Container>
    </>
);

export default Gallery;