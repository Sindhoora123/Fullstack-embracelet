import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import RelatedProducts from '../Components/Relatedproducts/Relatedproducts';

const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();

  const product = all_products.find(p => p.id === Number(productId));

  if (!product) {
    return (<></>
    );
  }

  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <RelatedProducts />
    </div>
  );
};

export default Product;
