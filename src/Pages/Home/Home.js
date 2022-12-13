import React from 'react';
import AboutMe from '../../Sections/AboutMe/AboutMe';
import Comments from '../../Sections/Comments/Comments';
import ContactMe from '../../Sections/ContactMe/ContactMe';
import Hero from '../../Sections/Hero/Hero';
import Projects from '../../Sections/Projects/Projects';
import Services from '../../Sections/Services/Services';
import Statistics from '../../Sections/Statistics/Statistics';

const Home = () => {
    return (
        <div>
            <h2>This is Home Page</h2>
            <Hero></Hero>
            <AboutMe></AboutMe>
            <Services></Services>
            <Projects></Projects>
            <Comments></Comments>
            <Statistics></Statistics>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;