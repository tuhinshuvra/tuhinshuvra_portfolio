import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Sections/Footer/Footer';
import NavBar from '../Sections/NavBar';

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;