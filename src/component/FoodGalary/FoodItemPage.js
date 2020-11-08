import React, { useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { countContext } from '../../App';
import allFoods from '../fakeData';
import './FoodItemPage.css';

const FoodItemPage = () => {
    let history = useHistory();

    const {foodCount, foodOrder} = useContext(countContext)

    const [count, setCount] = foodCount;
    const [order, setOrder] = foodOrder;

    const {id} = useParams();
    const selectedFood = allFoods.find(food => food.id.toString() === id);
    const {name, price, photoUrl} = selectedFood;
    
    const handleOrder = () => {
        const totalPrice = price * count;
        setOrder(count)
        const itemForLocalStorage = {
            name: name,
            price: totalPrice,
            count: count
        }
        localStorage.setItem("foodItem", JSON.stringify(itemForLocalStorage));
        history.push("/");

    }
    return (
        <div className='food-item-page container'>
            <div className="food-content">
                <h1>{name}</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime assumenda voluptates doloremque quis eveniet pariatur at? Eaque ducimus perspiciatis consectetur.</p>
                <div className="price-and-button">
                    <h2>${count > 1 ? (price * count).toFixed(2) : `${price}`}</h2>
                    <div className="button">
                    {/* onClick={handleIncrease} onClick={handleDecrease} */}
                        <button onClick={() => count > 0 && setCount(count - 1)}>-</button>
                        <p>{count}</p>
                        <button onClick={() => setCount(count + 1)} style={{color: 'red'}}>+</button>
                    </div>
                </div>
                <button onClick={handleOrder}>Add</button>
            </div>
            <div className="food-image">
                <img src={photoUrl} alt=""/>
            </div>
            
        </div>
    );
};

export default FoodItemPage;