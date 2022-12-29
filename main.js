const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuBurguer = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const productDetails = document.querySelector(".product-detail");

navbarEmail.addEventListener("click", toggleDesktopMenu);
menuBurguer.addEventListener("click", toggleMobileMenu);
shoppingCart.addEventListener("click", toggleProductDetails);

// Función para el menú Desktop
function toggleDesktopMenu(){
    const isShoppingCartClose = productDetails.classList.contains("inactive")

    if(!isShoppingCartClose){
        productDetails.classList.add("inactive")
    }
    desktopMenu.classList.toggle("inactive")
}

// Función para el menú Mobile
function toggleMobileMenu(){
    const isShoppingCartClose = productDetails.classList.contains("inactive")

    if(!isShoppingCartClose){
        productDetails.classList.add("inactive")
    }
    mobileMenu.classList.toggle("inactive")
}

// Función para el detalle de productos
function toggleProductDetails(){
    const isShoppingCartClose = desktopMenu.classList.contains("inactive")

    if(!isShoppingCartClose){
        desktopMenu.classList.add("inactive")
    }

    const isProductDetailsClose = mobileMenu.classList.contains("inactive")

    if(!isProductDetailsClose){
        mobileMenu.classList.add("inactive")
    }

    productDetails.classList.toggle("inactive")
}