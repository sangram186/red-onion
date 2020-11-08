import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './FoodItem.css'

const FoodItem = (props) => {
    const {photoUrl, name, shortDescription, price, id} = props.selectedItem;
    
    return (
        <Link className='food-item-style' to={`/foodItem/${id}`}>
            <Card>
            <Card.Img variant="top" src={photoUrl} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{shortDescription}</Card.Text>
                <Card.Title>${price}</Card.Title>
            </Card.Body>
            </Card>
        </Link>
        
        
    );
};

export default FoodItem;