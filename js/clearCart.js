import { cartList, cartTot } from "./createProduct.js";
import { setCartProductsNum } from "./ProdCart.js";
import { cartProducts, showCart} from "./ProdCart.js";
import { removeAllChildNodes } from "./filterAZ&Price.js";

const clearCartBtn = document.querySelector(".clearCart");

const clearCart = () => {clearCartBtn.addEventListener("click", () => {
  cartList.length = 0;
  typeof cartTot == "number" ? cartTot : cartTot.length = 0 ;
  localStorage.clear();
  
  removeAllChildNodes (cartProducts);
  setCartProductsNum(cartList, 0);
  
});

}

export { clearCartBtn, clearCart }
