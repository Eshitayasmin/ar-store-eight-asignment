
import React, { useEffect, useState } from 'react';
import Watch from '../Watch/Watch';
import './Products.css';



const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    
 

    useEffect( () =>{
      fetch('fake-data.json')
      .then(res => res.json())
      .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (selectedProduct) =>{
        
    }
    return (
        <div className='container'>
           <div className='watch-container'>
           {
             products.map(product => <Watch 
                data={product}
                handleAddToCart={handleAddToCart}
                key={product.id}></Watch> )
                       
            }
           </div>

           <div className='cart-container'>
               <h2>Selected Products</h2>
              
           </div>
        </div>
    );
};




export default Products;