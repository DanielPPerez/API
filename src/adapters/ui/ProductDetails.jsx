// Componente React para mostrar detalles de un producto

import React, { useEffect, useState } from 'react';
import productService from '../../core/application/ProductService';

function ProductDetails({ productId }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Llamada al servicio de aplicación para obtener detalles de un producto por ID
    const fetchProductDetails = async () => {
      const productDetails = await productService.getProductDetails(productId);
      setProduct(productDetails);
    };

    fetchProductDetails();
  }, [productId]);

  return (
    <div>
      <h2>Product Details</h2>
      {product && (
        <div>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
