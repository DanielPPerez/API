// Punto de entrada principal de la aplicación React

import React from 'react';
import ProductList from './adapters/ui/ProductList';

function App() {
  return (
    <div>
      <h1>Product Sales App</h1>
      <ProductList />
    </div>
  );
}

export default App;
