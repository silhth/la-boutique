import { data } from "./products.js"; 

function setCartProductsNum() {
    cartProductsNum.textContent = `Numero prodotti: ${cartList.length}/ Tot: ${cartTot} $`;
  }
  
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

      console.log(typeof cartList)
  
      cartList.push(
        productsList.find(
          (product) => parseInt(e.currentTarget.id) === product.id
        )
      );

      cartTot =  cartList.map((product)=>{
        return product.price
      }).reduce((a, b) =>   + a + b)  

      // console.log(cartTot)

      setCartProductsNum();
      showModale(productTitle);
      // Nel caso in cui volessimo aggiungere una interazione col LocalStorage
  
      localStorage.setItem("totCartitems", JSON.stringify(cartList));
  
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
  
  function renderProducts(listItems) {
    listItems.map((product) => {
      createProduct(
        wrapperProducts,
        product.image,
        product.title,
        product.price,
        product.id
      );
    });
  }

  function showModale (product) {
    modale.textContent = `Il prodotto "${product}" è stato aggiuto al carello`
    modale.style.top = "40%"
      setTimeout(() => {modale.style.top = "-250%";}, 1500);
  }
  
  // Async await
  // const getProductsList = async () => {
  //   const res = await fetch("https://fakestoreapi.com/products");
  //   const data = await res.json();
  //   productsList = data;
  
  //   // Nella eventualità di aggiungere una quantità per prodotto
  //   // productsList = data.map((product) => {
  //   //   product.quantity = 0;
  //   //   return product;
  //   // });
  
  //   return renderProducts(data);
  // };
  let productsList = [];
  const getProductsList = async () => {
    productsList = await data;
  
    return renderProducts(data);
  };



  const wrapperProducts = document.querySelector(".wrapper__products");
  
  // Parte inerente alla logica del carrello
  let cartList = [];
  
  const localStorageTot = localStorage.getItem("totCartitems");
  const cartBtn = document.querySelector(".cartBtn");
  const cartProductsNum = document.querySelector(".cartProductsNum");
  const clearCartBtn = document.querySelector(".clearCart");

  const modale = document.querySelector(".modale")

  let cartTot = []
  
  // Flusso generale
  const parsedTotCardItemsLen =
    JSON.parse(localStorage.getItem("totCartitems"))?.length || 0;
  
  cartProductsNum.textContent = `Numero prodotti: ${parsedTotCardItemsLen || 0}`;
  getProductsList();
  
  clearCartBtn.addEventListener("click", () => {
    cartList.length = 0;
    cartTot = 0;
    localStorage.clear();
    setCartProductsNum();
  });

  // cambio immagine hero

 const imagesHero = ["https://images.unsplash.com/photo-1523199455310-87b16c0eed11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
 "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
 "https://images.unsplash.com/photo-1560243563-062bfc001d68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
 "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"]


 const heroImg = document.querySelector(".overlay");
 let image = 0

 setInterval(function(){
       image> 2 ? image= 0 : image +=1;
       heroImg.style.backgroundImage =`url( ${imagesHero[image]})`;
     },3000)