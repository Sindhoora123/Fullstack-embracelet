import React, { createContext, useEffect, useState, } from 'react';
import all_products from '../Components/Assets/all_products';

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const getDefaultCart = () => {
    const cart = {};
    all_products.forEach(product => {
      cart[product.id] = 0;
    });
    return cart;
  };

  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [allproducts,setAllproducts]= useState([]);

  useEffect(()=>{


    if(localStorage.getItem('auth-token')){
      fetch('http://localhost:4000/getcart',{
        method:'POST',
        headers:{
          Accept:'application/form-data',
          'auth-token':`${localStorage.getItem('auth-token')}`,
          'Content-Type':'application/json',
        },
        body:"",
      }).then((response)=>response.json())
      .then((data)=>setCartItems(data));
    }
  },[])


const addToCart = (itemId) => {
  setCartItems(prev => {
    const updatedCart = {
      ...prev,
      [itemId]: prev[itemId] + 1
    };
    console.log('CartItems updated:', updatedCart);  // ✅ LOGGING
    if(localStorage.getItem('auth-token')){
      fetch('http://localhost:4000/addtocart',{
        method:'POST',
        headers:{
          Accept:'application/form-data',
          'auth-token':`${localStorage.getItem('auth-token')}`,
          'Content-Type':'application/json',

        },
        body:JSON.stringify({"itemId":itemId})
      })
      .then((response)=>response.json())
      .then((data)=>console.log(data));
      
    }
    return updatedCart;
  });
};


  const removeFromCart = (itemId) => {
    setCartItems(prev => ({
      ...prev,
      [itemId]: Math.max(prev[itemId] - 1, 0)
    }));
    if(localStorage.getItem('auth-token')){
      fetch('http://localhost:4000/removefromcart',{
        method:'POST',
        headers:{
          Accept:'application/form-data',
          'auth-token':`${localStorage.getItem('auth-token')}`,
          'Content-Type':'application/json',

        },
        body:JSON.stringify({"itemId":itemId})
      })
      .then((response)=>response.json())
      .then((data)=>console.log(data));
    }
  };

  const getTotalCartAmount = () => {
    let total = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const item = all_products.find(product => product.id === Number(itemId));
        total += item.new_price * cartItems[itemId];
      }
    }
    return total.toFixed(2);
  };

  return (
    <ShopContext.Provider value={{
      all_products,
      cartItems,
      addToCart,
      removeFromCart,
      getTotalCartAmount
    }}>
      {children}
    </ShopContext.Provider>
  );
};
