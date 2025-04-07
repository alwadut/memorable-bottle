import React, { useEffect, useState } from 'react';
import Bottol from '../bottol/bottol';
import './Bottols.css'

const Bottols = () => {
    const[bottols,setBottols]=useState([])
    const [cart,setCart]=useState([]);

    useEffect(()=>{
        fetch('Bottols.json')
        .then(res => res.json())
        .then(data => setBottols(data))

    },[])

    const handleAddToCart =bottol =>{
        const newCart =[...cart, bottol];
        setCart(newCart);
    }
        
    
    
    return (
        <div>
            <h2>Bottols avilable: {bottols.length}</h2>
            <h4>
                cart:{cart.length}
            </h4>
        
            
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