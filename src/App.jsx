import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/Homepage.tsx";
import Customers from "./pages/Customers.tsx";
import Blog from "./pages/Blog.tsx";
import Gallery from "./pages/Gallery.tsx";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route index path="/" element={<HomePage />} />
                <Route index path="/customers" element={<Customers />} />
                <Route index path="/blog" element={<Blog />} />
                <Route index path="/gallery" element={<Gallery />} />
            </Routes>
        </Router>
    );
};

export default App;
