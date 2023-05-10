import React from 'react';
import Banner from './Banner/Banner';
import About from './About/About';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <h3 className='text-center'>Home</h3>
        </div>
    );
};

export default Home;