// Servicio de aplicación que utiliza el puerto ProductRepository

import productRepository from './domain/ProductRepository';

class ProductService {
  async getProducts() {
    return await productRepository.getAllProducts();
  }

  async getProductDetails(productId) {
    return await productRepository.getProductById(productId);
  }
}

export default new ProductService();
