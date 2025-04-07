import React from 'react';
import'./bottol.css'


const bottol = ({bottol,handleAddToCart}) => {


    // console.log(bottol);

    const {name,img,price}=bottol;
    return (
        <div className='bottol'>
            <p>Bottol: {name}</p>
            <img src={img} alt="" />
            <p>Price : {price}</p>
            <button onClick={()=> handleAddToCart(bottol)}>Purches</button>
        </div>
    );
};

export default bottol;