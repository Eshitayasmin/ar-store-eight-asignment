
import React from 'react';
import './Cart.css';

const Cart = ({cart, clearCart, randomItem}) => {

        const chooseOne = () =>{
        let item = randomItem();
         const element = document.getElementById('choose-one');
         element.innerHTML =`
         <h2 class="cart-title">Selected For You</h2>
         <div class="choose-cart">
         <img class="cart-image" src=${item.img} alt="" />
         <p class="cart-name">${item.name}</p> 
         </div>

         `;
        }
       
    return (
        <div className='cart-div'>
            <h2 className='cart-title'>Selected Watch</h2>
            {
                cart.map((item) => <Item item={item} key={item.id}></Item>)
            }
             <div id='choose-one'>
              
             </div>

            <div>
            <button onClick={chooseOne} className='choose-one-btn'>Choose 1 For Me</button>
            </div>
            <div>
            <button onClick={clearCart} className='choose-again-btn'>Choose Again</button>
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


export {Cart, Item};