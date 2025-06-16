import React, { useContext } from 'react';
import './ProductDisplay.css';
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
        <div className='productdisplay-img-list'>
          <img src={product.image} alt=''/>
          <img src={product.image} alt=''/>
          <img src={product.image} alt=''/>
          <img src={product.image} alt=''/>
        </div>
        <div className='productdisplay-img'>
          <img className='productdisplay-main-img' src={product.image} alt=''/>
        </div>
        <div className='productdisplay-right'>
          <h1>{product.name}</h1>
          <div className='productdisplay-right-star'>
            <FaStar /><FaStar /><FaStar /><FaStar /><CiStar />
            <p>122</p>
          </div>
          <div className='pd-right-prices'>
            <div className='pd-right-price-old'>${product.old_price}</div>
            <div className='pd-right-price-new'>${product.new_price}</div>
          </div>
          <div className='pd-size'>
            <h1>Select Size</h1>
            <div className='size'>
              <div>Free Size</div>
            </div>
          </div>
          <button onClick={() => addToCart(product.id)}>Add to Cart</button>
          <p className='pd-cat'><span>Category : </span>{product.category}, Gold</p>
          <p className='pd-cat'><span>Tags : </span>Latest</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay;
