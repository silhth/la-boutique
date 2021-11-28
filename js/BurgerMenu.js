import { cartBanner } from "./ProdCart.js";

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

const menuList = document.querySelector('.menu')
const menuItems = [...document.querySelectorAll('a')]

const openCloseMenu = () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        menuBtn.style.marginLeft = "250px" 
        menuBtn.style.background = "rgba(0, 0, 0, 0.6)"
        menuList.style.left= "0%"
        cartBanner.style.height= "100vh"
        cartBanner.style.background= "rgba(0, 0, 0, 0.6)";
    } else { 
        menuBtn.classList.remove('open');
        menuOpen = false;
        menuBtn.style.marginLeft = "25px"
        menuBtn.style.background = "rgba(0, 0, 0, 0)"
        menuList.style.left= "-301px";
        cartBanner.style.height= "auto"
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            cartBanner.style.background= "rgba(0, 0, 0, 0.6)";}
           else {
             cartBanner.style.background =  "linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(0,0, 0, 0.6) 50%, rgb(0, 0, 0, 0) 100%)";}
    }
}


const burgerMenu = () => {menuBtn.addEventListener ('click', () => {
  
    openCloseMenu();

});
}

const menuClick =() => {
    menuItems.forEach(element => {
        console.log(menuItems)
        element.addEventListener('click', ()=> {
        openCloseMenu();
        })
        
    });
}

export { burgerMenu, menuBtn, menuClick }
