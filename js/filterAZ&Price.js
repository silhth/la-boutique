import {renderProducts} from "./render.js"
import { productsList, getProductsList, wrapperProducts} from "./fetchData.js"

const filterAZ = document.querySelector(".filter-AZ")
const filterPrice = document.querySelector (".filter-price")
function renderProductsAZ() {

    filterAZ.addEventListener('click', () => {
      removeAllChildNodes(wrapperProducts)
      productsList.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : ((a.title.toLowerCase() < b.title.toLowerCase()) ? -1 : 0))
      renderProducts(productsList, wrapperProducts);
      console.log(productsList)
    })
  }
console.log(productsList)
  renderProductsAZ()
  
  
  function renderProductsPrice() {
  
    filterPrice.addEventListener('click', () => {
      removeAllChildNodes(wrapperProducts)
      productsList.sort((a, b) => (a.price > b.price) ? 1 : ((a.price < b.price) ? -1 : 0))
      renderProducts(productsList, wrapperProducts)
    })
  }

  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
  }
  renderProductsPrice()

  export { renderProductsAZ, renderProductsPrice, removeAllChildNodes}