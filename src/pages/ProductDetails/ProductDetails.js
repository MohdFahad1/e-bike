import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = ({ data }) => {
  const { productId } = useParams();

  // Find the product with the matching ID
  const product = data.find((product) => product.id === parseInt(productId));

  // Render the product details
  return (
    <div style={{paddingTop:"200px"}}>
      <h1>Product Details</h1>
      {product && (
        <div style={{marginTop:"100px"}}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          {/* Render other product details */}
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
