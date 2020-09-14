import React from 'react';
import './FoodItem.css'

const FoodItem = (props) => {
    const {photoUrl, name, shortDescription, price} = props.selectedFood;
    return (
            <div className="food-item">
                <img src={require(`../../../images/foodItems/${photoUrl}`)} alt=""/>
                <h4>{name}</h4>
                <p>{shortDescription}</p>
                <h3>{price}</h3>
            </div>
    );
};

export default FoodItem;