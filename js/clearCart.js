import { cartList, cartTot } from "./createProduct.js";
import { setCartProductsNum } from "./ProdCart.js";
import { cartProducts, showCart} from "./ProdCart.js";

const clearCartBtn = document.querySelector(".clearCart");

const clearCart = () => {clearCartBtn.addEventListener("click", () => {
  cartList.length = 0;
  typeof cartTot == "number" ? cartTot : cartTot.length = 0 ;
  localStorage.clear();
  
  while (cartProducts.firstChild) {
    cartProducts.removeChild(cartProducts.firstChild)};
  setCartProductsNum(cartList, 0);
  cartProducts.style.display = "none"
  showCart.style.display = "block"
  
});

}

export { clearCartBtn, clearCart }
