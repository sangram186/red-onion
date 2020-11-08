import React, { createContext, useState } from 'react';
import Banner from '../Banner/Banner';
import FoodGalary from '../FoodGalary/FoodGalary';



const Home = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <Banner></Banner>
            <FoodGalary></FoodGalary>
        </div>
    );
};

export default Home;