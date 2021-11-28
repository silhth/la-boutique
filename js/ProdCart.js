import { renderProductsCart } from "./render.js";


// scritta numero prodotti e tot speso
const cartProductsNum = document.querySelector(".cartProductsNum");

  function setCartProductsNum(arr, tot) {
    cartProductsNum.textContent = `Numero prodotti: ${arr.length}/ Tot: ${tot} $`;
  }

//inserisce nel carrello gli articoli salvati nel local storage se presenti 
let cartProd= []
let cartProdTot = 0
const cartProducts = document.querySelector(".cart-items");

const localStorageItems = localStorage.getItem("totCartitems");
      if (localStorageItems) {
        cartProd = JSON.parse(localStorageItems);
        cartProdTot = cartProd.map((product) => {
          return product.price
        }).reduce((a, b) => + a + b)
      }


cartProd.forEach(item => renderProductsCart(item, cartProducts)); 


setCartProductsNum(cartProd, cartProdTot);


// modale aggiunta prodotti al carello
const modaleProdCart = document.querySelector(".modale")

function showModale(product) {
    modaleProdCart.textContent = `Il prodotto "${product}" è stato aggiuto al carello`
    modaleProdCart.style.top = "40%"
    setTimeout(() => { modaleProdCart.style.top = "-250%"; }, 1500);
  }


//mostra e nasconde il carrello con prodotti selezionati

const cart = document.querySelector(".cart")
const showCart = document.querySelector(".show-cart")
const hideCart = document.querySelector (".hide-cart")
const cartBanner = document.querySelector (".cartBanner")


const showHideCart = () =>{
showCart.addEventListener('click', () => {
  
  cart.style.right = "0px";
  showCart.style.display = "none"
  cartBanner.style.height= "100vh"
  cartBanner.style.background= "rgba(0, 0, 0, 0.6)";
})

hideCart.addEventListener('click', () => {
    cart.style.right = "-300px";
    showCart.style.display = "block";
    cartBanner.style.height= "auto";
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
     cartBanner.style.background= "rgba(0, 0, 0, 0.6)";}
    else {
      cartBanner.style.background =  "linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(0,0, 0, 0.6) 50%, rgb(0, 0, 0, 0) 100%)";}
  })}

export { cartBanner, showCart, cartProducts, modaleProdCart, showModale, setCartProductsNum, showHideCart}