import React, { useState } from 'react';
import allFoods from '../fakeData';
import FoodItem from './FoodItem/FoodItem';
import './FoodGalary.css';
import { CardDeck } from 'react-bootstrap';

const FoodGalary = () => {
    const [foodCategory, setFoodCategory] = useState('lunch');
    const handleClick = (e) => {
        setFoodCategory(e.target.name);
    }
    const selectedFoods = allFoods.filter(food => food.type === foodCategory);

    return (
        <div className='container'>
            <div className="food-category">
                <button name='breakfast' onClick={handleClick}>Breakfast</button>
                <button name='lunch' onClick={handleClick}>Lunch</button>
                <button name='dinner' onClick={handleClick}>Dinner</button>
            </div>
                <div className="food-items">
                    {
                        selectedFoods.map(selectedFood => <FoodItem key={selectedFood.id} selectedFood={selectedFood}></FoodItem>)
                    }
                </div>
        </div>
    );
};

export default FoodGalary;