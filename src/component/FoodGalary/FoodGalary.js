import React, { useContext, useState } from 'react';
import allFoods from '../fakeData';
import FoodItem from './FoodItem/FoodItem';
import './FoodGalary.css';
import { Badge, Button } from 'react-bootstrap';
import { countContext } from '../../App';
import { useHistory } from 'react-router-dom';

const FoodGalary = () => {
    const {foodCount, foodOrder} = useContext(countContext);

    const [count, setCount] = foodCount;
    const [order, setOrder] = foodOrder;
    console.log(count)

    const [foodCategory, setFoodCategory] = useState('lunch');
    const handleClick = (e) => {
        setFoodCategory(e.target.name);
    }
    const selectedItems = allFoods.filter(food => food.type === foodCategory);

    const history = useHistory();
    const handleCheckOut = () => {
        history.push('/delivery')
    }

    return (
        <div className='container food-gallery'>
            <div className="food-category">
                <button className={foodCategory === 'breakfast' ? 'border-bottom' : ''} name='breakfast' onClick={handleClick}>Breakfast</button>
                <button className={foodCategory === 'lunch' ? 'border-bottom' : ''} name='lunch' onClick={handleClick}>Lunch</button>
                <button className={foodCategory === 'dinner' ? 'border-bottom' : ''} name='dinner' onClick={handleClick}>Dinner</button>
            </div>
            <div className="food-items">
                {
                    selectedItems.map(selectedItem => <FoodItem key={selectedItem.id} selectedItem={selectedItem}></FoodItem>)
                }
            </div>

            <Button onClick={order > 0 ? handleCheckOut : undefined} variant={order > 0 ? `${'success'}` : 'light'} >
            Check out Your Order <Badge variant="light">{order}</Badge>
                <span className="sr-only">unread messages</span>
            </Button>
        </div>
    );
};

export default FoodGalary;