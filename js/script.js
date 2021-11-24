// import { data } from "./products.js"; 
// FUNZIONI

function createProduct(parent, imgUrl, productTitle, textPrice,idProduct) {
  const product = document.createElement("div");
  product.className = "product";
  product.setAttribute ("id", idProduct)

  createImg(product, imgUrl, productTitle);
  createText(product, productTitle, textPrice);
  parent.appendChild(product);

  product.addEventListener("click", (e) => {
    cartList.push(
      productList.find(
        (product) => parseInt(e.currentTarget.id) === product.id)
      ) 

      cartTot = cartList.map((product)=>{
        return product.price
      }).reduce((a, b) => a + b)    

      showModale (productTitle);

    localStorage.getItem('cartItems') === "null" ?localStorage.setItem('cartItems', cartList.length):
        localStorage.setItem('cartItems', parseInt(localStorage.getItem('cartItems')) + 1)
    
    
    localStorage.setItem('cartTotal', cartTot)
    setCartPtoductsNum ();
    }
  )
  
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


function renderProducts(listItems) {
    listItems.map((product) => {
      createProduct(wrapperProducts, product.image, product.title, product.price, product.id);
    });
  }

function setCartPtoductsNum () {
    cartProductsNum.textContent =`Numero prodotti: ${localStorage.getItem('cartItems')} / Totale: ${localStorage.getItem('cartTotal')}$`
  };



function showModale (product) {
  modale.textContent = `Il prodotto "${product}" è stato aggiuto al carello`
  modale.style.display = "flex"
    setTimeout(() => {modale.style.display = "none";}, 1500);
}
// COSTANTI

const wrapperProducts = document.querySelector(".wrapper__products");
const cartList = [];
let productList = [];
const cartProductsNum= document.querySelector(".cartProductsNum")
const clearCart = document.querySelector(".clearCart")

const modale = document.querySelector(".modale")

let cartTot = []
// Async await


//prendere  i data da file se remoto è lento 

// const getProductsList = async () => {
//   productList = await data;

//   return renderProducts(data);
// };

const getProductsList = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  productList = data;
  
  return renderProducts(data);
  
};

getProductsList();


//CARRELLO E BTN PER SVUOTARE CARRELLO

localStorage.setItem('cartItems', localStorage.getItem('cartItems'));
localStorage.setItem('cartTotal', localStorage.getItem('cartTotal'));
if (localStorage.getItem('cartItems') === "null")
   {cartProductsNum.textContent =`Numero prodotti: ${cartList.length}`}
  else{setCartPtoductsNum ()};

clearCart.addEventListener('click', () =>{
    cartList.splice(0, cartList.length),
    localStorage.setItem('cartItems', 0)
    localStorage.setItem('cartTotal', 0)
    setCartPtoductsNum ();
    });



 // Nella eventualità di aggiungere una quantità per prodotto
  // productsList = data.map((product) => {
  //   product.quantity = 0;
  //   return product;
  // });
