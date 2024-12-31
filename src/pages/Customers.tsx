
import { UserList } from "../components";
import { Navbar } from "../common";
import { Container } from "@mui/material";

const Customers = () => (
    <>
        <Navbar />
        <Container className="mt-20">
            <UserList />
        </Container>
    </>
);

export default Customers;