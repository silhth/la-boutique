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

  function renderProductsCart(items, container ) {
    const title = document.createElement("h4");
    title.textContent = items.title;

    const price = document.createElement("strong");
    price.textContent = `${items.price} $`;

    container.append(title,
      price);
}






export{ renderProducts, renderProductsCart}