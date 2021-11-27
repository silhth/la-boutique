import { getProductsList } from "./fetchData.js"
import { clearCart } from "./clearCart.js";
import { slideImgHero } from "./slideImgHero.js";
import { addReview } from "./addReviews.js";
import { showHideCart } from "./ProdCart.js";
import {renderProductsAZ, renderProductsPrice } from "./filterAZ&Price.js"




// Parte inerente alla logica del carrello




// visualizza la scritta nel carello una volta ricaricata la pgina 
// const cartProductsNum = document.querySelector(".cartProductsNum");
// const parsedTotCardItemsLen =
//   JSON.parse(localStorage.getItem("totCartitems"))?.length || 0;
// cartProductsNum.textContent = `Numero prodotti: ${parsedTotCardItemsLen || 0}`;

//Cambia immagine nella hero ogni 3s 
slideImgHero()

// aggiunge i prodotti alla pagina 
getProductsList();

//svuota il carello e il localStorage 
clearCart()

//aggiunge le recensioni 
addReview()

showHideCart()

// modifica il banner in altro allo scroll del mouse

const cartBanner = document.querySelector (".cartBanner")
const showCart = document.querySelector(".show-cart")
console.log(showCart)

document.addEventListener ('scroll', () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    cartBanner.style.background= "rgba(151, 151, 151, 0.3)";
    cartBanner.style.boxShadow= "0px 2px 6px";
    cartBanner.style.padding = 0;
    showCart.style.filter = "invert(0)";
}
    else {

    cartBanner.style.padding = "7px 0";
    cartBanner.style.boxShadow= "0px 0px 0px";
    cartBanner.style.background =  "linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(0,0, 0, 0.6) 50%, rgb(0, 0, 0, 0) 100%)";
    showCart.style.filter = "invert(100%)"
    }

}
   )


   renderProductsAZ();
   renderProductsPrice();

  