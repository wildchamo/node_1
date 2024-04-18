const { faker } = require('@faker-js/faker');

const boom = require('@hapi/boom');

const Joi = require('joi');

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
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async create({ name, price, image }) {
    const newProduct = {
      id: this.products.length + 1,
      name,
      price,
      image,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  async find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      }, 2000);
    });
  }

  async findOne(id) {
    const product = this.products.find((item) => item.id == id);
    if (!product) {
      throw boom.notFound('Product not found');
    }
    if (product.isBlock) {
      throw boom.conflict('Product not allowed to see');
    } else {
      return product;
    }
  }

  async update(id, productUpdate) {
    const productToUpdate = this.products.findIndex((item) => item.id == id);

    if (productToUpdate == -1) {
      throw boom.notFound('Product not found');
    } else {
      let product = this.products[productToUpdate];
      product = {
        ...product,
        ...productUpdate,
      };

      return this.products[productToUpdate];
    }
  }

  async delete(id) {
    const productToDelete = this.products.findIndex((item) => item.id == id);
    if (productToDelete == -1) {
      throw boom.notFound('Product not found');
    } else {
      this.products.splice(productToDelete, 1);
      return { message: 'Product deleted', id: productToDelete };
    }
  }
}

module.exports = ProductsService;
