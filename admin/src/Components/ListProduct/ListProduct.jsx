import React from 'react'
import './ListProduct.css'
import { useState } from 'react'
import { useEffect } from 'react';

const ListProduct = () => {


  const [allproducts,setAllproducts]= useState([]);

  const fetchInfo = async() =>{
    await fetch('http://localhost:4000/allproducts')
    .then((res)=>res.json())
    .then((data)=>{setAllproducts(data)});
  }

  useEffect(()=>{
    fetchInfo();
  },[])

  const removeProduct = async(id)=>{
    await fetch('http://localhost:4000/removeproduct',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({id:id})
    })
    await fetchInfo();
  }
  
  return (
    <div className='list-product'>
      <h1>All Products</h1>
      <div className='listproduct-format-main'>
        <p>Product</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className='listproduct-allproducts'>
        
        {allproducts.map((product,index)=>{
          return <><div key={index} className='listproduct-format-main listproduct-format'>
            <img src={product.image} alt="" className="listproduct-product-icon" />
            <p>{product.name}</p>
            <p>${product.old_price}</p>
            <p>${product.new_price}</p>
            <p>{product.category}</p>
            <button onClick={()=>{removeProduct(product.id)}} className='listproduct-remove-icon' >-</button>
          </div>
          
          </>

        })}

      </div>
    </div>
  )
}

export default ListProduct