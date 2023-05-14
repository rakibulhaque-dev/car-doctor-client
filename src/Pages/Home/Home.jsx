import React from 'react';
import Banner from './Banner/Banner';
import About from './About/About';
import ServicesSection from './Services/ServicesSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <ServicesSection></ServicesSection>
        </div>
    );
};

export default Home;