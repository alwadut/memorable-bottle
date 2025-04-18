const getStoredCart =()=>{
    const storedCartString =localStorage.getItem('cart');
    if(storedCartString){
        return JSON.parse(storedCartString)
    }
    return [];
}
const savecartToLS = cart =>{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified);
}

const addToLS =id =>{
    const cart = getStoredCart();
    cart.push(id);
    //save to local storage 
    savecartToLS(cart);
}

export {addToLS,getStoredCart}
