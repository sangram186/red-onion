import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
            <div className="banner">
                <div className="banner-item">
                    <h1 className='mb-3'>Best food waiting for your belly</h1>
                    
                    <div className="for-positioning">
                        <input className='banner-input' type="text" placeholder='search food item'/>
                        <button className='banner-button'>Search</button>
                    </div>
                </div>
            </div>
    );
};

export default Banner;