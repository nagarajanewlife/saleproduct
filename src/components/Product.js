import React, { useState, useEffect } from "react";
import axios from "axios";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products); // Corrected line
        console.log(response.data.products); // Corrected line
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {products.map(
        (
          product // Rendering each product
        ) => (
          <div className="product" key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div className="product-info">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Rating: {product.rating}</p>
              <p>Stock: {product.stock}</p>
              <p>Brand: {product.brand}</p>
              <p>Category: {product.category}</p>
            </div>
            <div className="product-images">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Product image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Product;
