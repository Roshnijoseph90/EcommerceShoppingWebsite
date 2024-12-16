import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState(null); 
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);  

  useEffect(() => {
    // Fetch product data when component mounts
    const fetchProductData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products'); 
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching product data');
        setLoading(false);
      }
    };

    fetchProductData();
  }, []); 
 if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className="product-container">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img 
            src={product.image} 
            alt={product.title} 
            className="product-image"
          />
          <h2 className="product-title">{product.title}</h2>
          <p className="product-description">{product.description}</p>
          <h3 className="product-price">${product.price}</h3>
        </div>
      ))}
    </div>
  );
};
export default Products
