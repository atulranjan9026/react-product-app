import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../productsData';
import './ProductList.css';

const ProductList = () => {
  return (
    <div className="container">
      <h1>Product List</h1>
      <div className="product-list">
        {products.map(product => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <Link to={`/product/${product.id}`} className="view-details-link">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
