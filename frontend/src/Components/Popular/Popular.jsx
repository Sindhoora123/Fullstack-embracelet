import React, { useEffect, useState } from 'react'
import './Popular.css'
import Item from '../Item/Item'

const Popular = () => {
  
  const [pop_product,setPop_product] = useState([]);
    useEffect(()=>{
      fetch('http://localhost:4000/popularinmen')
      .then((response)=>response.json())
      .then((data)=>setPop_product(data))
    },[])
  
  return (
    <div className='popular'>
        <h1>POPULAR IN MEN</h1>
        <hr/>
        <div className='popular-item'>
            {pop_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
     
  )
}

export default Popular