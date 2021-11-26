import { createProduct } from "./createProduct.js"

 function renderProducts(listItems, container) {
    listItems.map((product) => {
      createProduct(
        container,
        product.image,
        product.title,
        product.price,
        product.id
      );
    });
  }

export{ renderProducts }