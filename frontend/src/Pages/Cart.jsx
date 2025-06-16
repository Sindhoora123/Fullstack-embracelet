/* import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext'; */
import Cartitems from '../Components/Cartitems/Cartitems';

const Cart = () => {
   /* const { cartItems, addToCart, removeFromCart, getTotalCartAmount, all_products } = useContext(ShopContext); */

  return (
    <Cartitems/>
    /* <div style={{ padding: '2rem' }}>
      <h2>Your Shopping Cart</h2>
      {all_products.map(product => {
        const quantity = cartItems[product.id];
        if (quantity > 0) {
          return (
            <div key={product.id} style={{ borderBottom: '1px solid #ccc', marginBottom: '1rem', paddingBottom: '1rem' }}>
              <img src={product.image} alt={product.name} width={100} />
              <h3>{product.name}</h3>
              <p>Price: ₹{product.new_price}</p>
              <p>Quantity: {quantity}</p>
              <button onClick={() => addToCart(product.id)}>+</button>
              <button onClick={() => removeFromCart(product.id)}>-</button>
            </div>
          );
        }
        return null;
      })}
      <h3>Total: ₹{getTotalCartAmount()}</h3>
    </div> */
  );
};

export default Cart;
