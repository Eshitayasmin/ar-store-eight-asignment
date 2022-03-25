import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
  
    return (
        <div>
            {
                cart.map((item) => <Item item={item} key={item.id}></Item>)
            }

            <div>
            <button>Choose 1 For Me</button>
            </div>
            <div>
            <button>Choose Again</button>
            </div>
            
        </div>
    );
};

const Item = ({item})=>{
    const {name, img} = item;
   return (
       <div className='cart'>
           <img className='cart-image' src={img} alt="" />
           <p className='cart-name'>{name}</p>
       </div>
   ) 
}

export default Cart;