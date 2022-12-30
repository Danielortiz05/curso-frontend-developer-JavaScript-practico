const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuBurguer = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const productDetails = document.querySelector(".product-detail");
const cardContianer = document.querySelector(".cards-container")

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


const productos =[];

productos.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productos.push({
    name: "Table",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productos.push({
    name: "SmartPhone",
    price: 1120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

function renderProducts(arr){
    for (producto of arr){

        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const img = document.createElement("img");
        img.setAttribute("src", producto.image);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const divContainer = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + producto.price;
        const nameProduct = document.createElement("p");
        nameProduct.innerText = producto.name;
    
        divContainer.appendChild(productPrice)
        divContainer.appendChild(nameProduct)
    
    
        const figureInfo = document.createElement("figure")
        const imageFigureInfo = document.createElement("img")
        imageFigureInfo.setAttribute("src", "./icons/bt_add_to_cart.svg")
    
        figureInfo.appendChild(imageFigureInfo)
    
        productInfo.appendChild(divContainer)
        productInfo.appendChild(figureInfo)
    
        productCard.appendChild(img)
        productCard.appendChild(productInfo)
    
        cardContianer.appendChild(productCard)
    }

}

renderProducts(productos);




{/* <div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div> */}

