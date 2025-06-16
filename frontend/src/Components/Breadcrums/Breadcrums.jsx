/* import React from 'react';
import './Breadcrums.css';

const Breadcrums = ( props ) => {
  const {product}=props;
 

  return (
    <div className='breadcrum'>
      HOME - SHOP - {product.category} - {product.name}
    </div>
  );
};

export default Breadcrums;*/
import React from 'react';
import './Breadcrums.css';

const Breadcrums = ({ product }) => {
  if (!product) {
    return <div className='breadcrum'>HOME &gt; SHOP</div>; // fallback
  }

  return (
    <div className='breadcrum'>
      HOME &gt; SHOP &gt; {product.category} &gt; {product.name}
    </div>
  );
};

export default Breadcrums;
