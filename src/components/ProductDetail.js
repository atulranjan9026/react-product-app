import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../productsData'; 
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container">
      <h1>{product.name}</h1>
      <div className="product-details">
        <img src={product.image} alt={product.name} />
        <p>{product.description}</p>
        <button className="buy-now">Buy Now</button>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
