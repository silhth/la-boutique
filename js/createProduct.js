import { productsList } from "./fetchData.js";
import { showModale, setCartProductsNum } from "./ProdCart.js";
import { renderProductsCart } from "./render.js";
import { cartProducts } from "./ProdCart.js";


let cartList = [];
let cartTot = [];


 
 function createProduct(parent, imgUrl, productTitle, textPrice, idProduct) {
    const product = document.createElement("div");
    product.className = "product";
    product.setAttribute("id", idProduct);
  
    createImg(product, imgUrl, productTitle);
    createText(product, productTitle, textPrice);
    parent.appendChild(product);
  
    product.addEventListener("click", (e) => {
      const localStorageValue = localStorage.getItem("totCartitems");
      if (localStorageValue) {
        cartList = JSON.parse(localStorageValue);
      }
  
    
      cartList.push(
        productsList.find(
          (product) => parseInt(e.currentTarget.id) === product.id
        )
      );
     
     
      cartTot = cartList.map((product) => {
        return product.price
      }).reduce((a, b) => + a + b)

        
      setCartProductsNum(cartList, cartTot);
      
      showModale(productTitle);
      // Nel caso in cui volessimo aggiungere una interazione col LocalStorage
  
      localStorage.setItem("totCartitems", JSON.stringify(cartList));

      // let cartProduct =

  
      let prodInCard = cartList.length > 1 ? cartList.pop() : cartList[0]
      
      renderProductsCart(prodInCard, cartProducts);
  
      // console.log("LOCAL STORAGE ==>", localStorageValue);
    });
  }
  
  
  function createImg(parent, imgUrl, productTitle) {
    const image = document.createElement("img");
    image.src = imgUrl;
    image.alt = productTitle;
  
    parent.appendChild(image);
  }
  
  function createText(parent, productTitle, textPrice) {
    const title = document.createElement("h4");
    title.textContent = productTitle;
  
    const price = document.createElement("strong");
    price.textContent = `${textPrice} $`;
  
    parent.append(title, price);
  }


  export { createProduct , createImg , createText, cartList, cartTot}