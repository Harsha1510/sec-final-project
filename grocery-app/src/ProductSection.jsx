// ProductSection.js
import React, { useEffect, useState } from 'react';
import './ProductSection.css';

function ProductSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="product-section">
      <h2>Best Sellers</h2>
      <div className="product-cards">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">
                <span className="original-price">₹{product.Oprice}</span> <br />
                <span className="discounted-price">₹{product.Dprice}</span> 
              
            </p>
            <button className="add-button">Add</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductSection;
