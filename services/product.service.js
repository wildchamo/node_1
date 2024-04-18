const { faker } = require('@faker-js/faker');

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 10;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: i + 1,
        name: faker.commerce.productName().toString(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url(),
      });
    }

    console.log(this.products);
  }

  create(productData) {
    const newProduct = {
      id: this.products.length + 1,
      ...productData,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  find() {
    return this.products;
  }

  findOne(id) {
    return this.products.find((item) => item.id == id);
  }

  update(id, productUpdate) {
    const productToUpdate = this.products.findIndex((item) => item.id == id);

    if (productToUpdate == -1) {
      throw new Error('Product not found');
    } else {
      const product = this.products[productToUpdate];
      product = {
        ...product,
        ...productUpdate,
      };

      return this.products[productToUpdate];
    }
  }

  delete(id) {
    const productToDelete = this.products.findIndex((item) => item.id == id);
    if (productToDelete == -1) {
      throw new Error('Product not found');
    } else {
      this.products.splice(productToDelete, 1);
      return { message: 'Product deleted', id: productToDelete };
    }
  }
}

module.exports = ProductsService;
