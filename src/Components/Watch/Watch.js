import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Watch.css'

const Watch = ({data, handleAddToCart}) => {
    const {name, price, img} = data;

    

    return (
        <div className='watch-card'>
        <img className='image' src={img} alt="" />
            <p className='watch-name'>{name}</p>
            <p className='watch-price'>price: ${price}</p>

            <div>
                <button onClick={() => handleAddToCart(data)} className='cart-btn'>Add to Cart
                <FontAwesomeIcon className='cart-icon' icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            </div>
        
    </div>
    );
};

export default Watch;