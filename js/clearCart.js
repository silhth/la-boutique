import { cartList, cartTot } from "./createProduct.js";
import { setCartProductsNum } from "./ProdCart.js"

const clearCartBtn = document.querySelector(".clearCart");

const clearCart = () => {clearCartBtn.addEventListener("click", () => {
  cartList.length = 0;
  typeof cartTot == "number" ? cartTot : cartTot.length = 0 ;
  localStorage.clear();
  setCartProductsNum(cartList, 0);
});

}

export { clearCartBtn, clearCart }
