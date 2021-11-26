import { getProductsList } from "./fetchData.js"
import { clearCart } from "./clearCart.js";
import { slideImgHero } from "./slideImgHero.js";
import { addReview } from "./addReviews.js";
import { showHideCart } from "./ProdCart.js";



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
