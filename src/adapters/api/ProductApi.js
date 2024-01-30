// Este adaptador se encarga de realizar las llamadas a la API de productos

class ProductApi {
  async getProducts() {
    // Implementa la lógica para obtener la lista de productos desde la API
    // Puede ser utilizando fetch u otra biblioteca para realizar peticiones HTTP
  }

  async getProductDetails(productId) {
    // Implementa la lógica para obtener los detalles de un producto por ID desde la API
  }
}

export default new ProductApi();
