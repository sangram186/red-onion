import React from 'react';
import Banner from '../Banner/Banner';
import FoodGalary from '../FoodGalary/FoodGalary';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <FoodGalary></FoodGalary>
        </div>
    );
};

export default Home;