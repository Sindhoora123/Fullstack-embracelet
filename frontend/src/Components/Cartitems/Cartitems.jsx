
import React, { useContext } from 'react'
import './Cartitems.css'
import { ShopContext } from '../../Context/ShopContext';

const Cartitems = () => {
    const { cartItems, addToCart, removeFromCart, getTotalCartAmount, all_products } = useContext(ShopContext);



    // Check if cart has any items
    

    return (
        <div className='cartitems'>

            
            
                <div style={{ padding: '2rem' }}>
      <h2>Your Shopping Cart</h2>
                  <div className='cartitems-format-main'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Add</p>
                <p>Remove</p>
            </div>
            
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
      <div><h3>Total: ₹{getTotalCartAmount()}</h3>
      <div className='proceed'><button>Checkout</button></div>
      </div>

    </div>
    </div>
    )
}

export default Cartitems; 