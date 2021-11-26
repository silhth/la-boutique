import { getProductsList } from "./fetchData.js"
import { clearCart } from "./clearCart.js";
import { slideImgHero } from "./slideImgHero.js";
import { addReview } from "./addReviews.js";

// Parte inerente alla logica del carrello


// const localStorageTot = localStorage.getItem("totCartitems");
// const cartBtn = document.querySelector(".cartBtn");
const cartProductsNum = document.querySelector(".cartProductsNum");
// const clearCartBtn = document.querySelector(".clearCart");

// const modale = document.querySelector(".modale")





// Flusso generale
const parsedTotCardItemsLen =
  JSON.parse(localStorage.getItem("totCartitems"))?.length || 0;

cartProductsNum.textContent = `Numero prodotti: ${parsedTotCardItemsLen || 0}`;

//Cambia immagine nella hero ogni 3s 
slideImgHero()

// aggiunge i prodotti alla pagina 
getProductsList();

//svuota il carello e il localStorage 
clearCart()

//aggiunge le recensioni 
addReview()



