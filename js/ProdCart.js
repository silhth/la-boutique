const cartProductsNum = document.querySelector(".cartProductsNum");

const modaleProdCart = document.querySelector(".modale")

function showModale(product) {
    modaleProdCart.textContent = `Il prodotto "${product}" è stato aggiuto al carello`
    modaleProdCart.style.top = "40%"
    setTimeout(() => { modaleProdCart.style.top = "-250%"; }, 1500);
  }


  function setCartProductsNum(arr, tot) {
    cartProductsNum.textContent = `Numero prodotti: ${arr.length}/ Tot: ${tot} $`;
  }

export { modaleProdCart, showModale, setCartProductsNum}