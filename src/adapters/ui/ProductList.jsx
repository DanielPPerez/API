// Componente React para mostrar la lista de productos

import React, { useEffect, useState } from 'react';
import productService from '../../core/application/ProductService';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Llamada al servicio de aplicación para obtener la lista de productos
    const fetchProducts = async () => {
      const productList = await productService.getProducts();
      setProducts(productList);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
