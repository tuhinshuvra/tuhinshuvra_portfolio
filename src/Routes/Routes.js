import React, { Children } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../Pages/Home/Home';
import AboutMe from '../Sections/AboutMe/AboutMe';
import ContactMe from '../Sections/ContactMe/ContactMe';
import Projects from '../Sections/Projects/Projects';
import Services from '../Sections/Services/Services';


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>, children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <AboutMe></AboutMe>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/contact',
                element: <ContactMe></ContactMe>
            },
        ]
    }
])


export default router;