import { renderProducts } from "./render.js";

const cartProductsNum = document.querySelector(".cartProductsNum");

const modaleProdCart = document.querySelector(".modale")

// modale aggiunta prodotti al carello
function showModale(product) {
    modaleProdCart.textContent = `Il prodotto "${product}" è stato aggiuto al carello`
    modaleProdCart.style.top = "40%"
    setTimeout(() => { modaleProdCart.style.top = "-250%"; }, 1500);
  }

// scritta numero prodotti e tot speso
  function setCartProductsNum(arr, tot) {
    cartProductsNum.textContent = `Numero prodotti: ${arr.length}/ Tot: ${tot} $`;
  }

//carrello con prodotti selezionati


const cartProducts = document.querySelector(".cart-items");
let cartProd= []
const showCart = document.querySelector(".show-cart")
const hideCart = document.querySelector (".hide-cart")


const localStorageItems = localStorage.getItem("totCartitems");
      if (localStorageItems) {
        cartProd = JSON.parse(localStorageItems);
      }

const showHideCart = () =>{
showCart.addEventListener('click', () => {
  console.log(cartProd)
  renderProducts(cartProd, cartProducts);
  cartProducts.style.display = "flex";
  showCart.style.display = "none"})

hideCart.addEventListener('click', () => {
    cartProducts.style.display = "none"
    showCart.style.display = "block"})}



export { showCart, cartProducts, modaleProdCart, showModale, setCartProductsNum, showHideCart}