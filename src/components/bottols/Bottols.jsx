import React, { useEffect, useState } from 'react';
import Bottol from '../bottol/bottol';
import './Bottols.css'
import { addToLS, getStoredCart } from '../utilitis/localStorage';
import Cart from '../cart/Cart';

const Bottols = () => {
    const[bottols,setBottols]=useState([])
    const [cart,setCart]=useState([]);

    useEffect(()=>{
        fetch('Bottols.json')
        .then(res => res.json())
        .then(data => setBottols(data))

    },[])

    useEffect(()=>{
        console.log(bottols.length)
        if(bottols.length){
            const storedCart = getStoredCart();
            console.log(storedCart,bottols);
            const savedCart = [];
            for(const id of storedCart){
                console.log(id);
                const bottol = bottols.find(bottol => bottol.id === id);
                if (bottol){
                    savedCart.push(bottol)
                }
            }
            console.log('saved cart ',savedCart)
            setCart(savedCart);

        }
    },[bottols])

    const handleAddToCart =bottol =>{
        const newCart =[...cart, bottol];
        setCart(newCart);
        addToLS(bottol.id) 
    }
        
    
    
    return (
        <div>
            <h2>Bottols avilable: {bottols.length}</h2>
           <Cart cart={cart}></Cart>
        
            
            <div className='bottol-container'>
                
            {
                    bottols.map(bottol => <Bottol key={bottol.id} bottol={bottol}
                    handleAddToCart ={handleAddToCart}
                    
                    > </Bottol>)
                }
            </div>
          
        </div>
    );
};

export default Bottols;