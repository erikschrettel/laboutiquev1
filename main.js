//* Variables 

//Contenedor de productos

const productsCards = document.querySelector('.cards-container');
const productsCart = document.querySelector('.cart-container');
const total = document.querySelector('.total');
const categories = document.querySelector('.categories');
// HTML Collection de todas las categorias (category), para ma nejarlo con dataset
const categoriesList = document.querySelectorAll('category');
const btnLoad = document.querySelector('.btn-load')
// Para comprar
const buyBtn = document.querySelector('.btn-buy');
const cartBtn = document.querySelector('.cart-label');
const barsBtn = document.querySelector('.menu-label');
const cartMenu = document.querySelector('.cart');
const barsMenu = document.querySelector('.navbar-list');
const overlay = document.querySelector('.overlay');

//Setear el array para el carrito
let cart = JSON.parse(localStorage.getItem('cart')) || [];

//Funcion para guardar en el LocalStorage
const saveLocalStorage = cartList => {
    localStorage.setItem('cart', JSON.stringify(cartList));
};



// Logica para filtrar productos (renderProducts)


// Funcion para renderizar html
const renderProduct = (product) => {
    const {id, name, description, price, img} = product 
    return ` <div class="cards-p">
    <img class="img" src="${img}" alt=""> 
    <h3 class="title-guitar">${name}</h3>
    <h4 class="description-guitar">${description}</h4>
    <div class="div-price-btn">
        <span class="price">$${price} U$D</span>
        <button class="btns-add" data-id=${id}>Agregar</button>
    </div>
</div>`
}

// Funcion para renderizar los productos divididos, basicamente recibe un index, si no recibe nada por defecto va a ser 0, si el index es 0 renderiza el primer array del data
const renderDividedProducts = (index = 0) => {
    productsCards.innerHTML += productsController.dividedProducts[index]
    .map(renderProduct)
    .join('')
}

const renderFilteredProducts = category => {
    const productList = arrayGuitars.filter(product => product.category === category);

    productsCards.innerHTML = productList.map(renderProduct).join('')
}

// Funcion para renderizar productos, recibe un index, si no le pasamos nada por default va a ser 0.
const renderProducts = (index = 0, category = undefined) => {
    if(!category){
        renderDividedProducts(index);
        return;
    }
    renderFilteredProducts(category);
}

// Logica de filtros

const changeBtnActiveState = (selectedCategory) => {
    const categories = [...categoriesList];
    categories.forEach(categoryBtn => {
        if (categoryBtn.dataset.category !== selectedCategory) 
        {
        categoryBtn.classList.remove('active');
        return;
        }
        categoryBtn.classList.add('active')
    })
}

const changeFilterState = (e) => {
    const selectedCategory = e.target.dataset.category;
    changeBtnActiveState(selectedCategory);
}

const applyFilter = (e) => {
    if(!e.target.classList.contains('category'))
    return;
    changeFilterState(e);
    if (!e.target.dataset.category) {
        productsCards.innerHTML = '';
        renderProducts();
    } else {
        renderProducts(0, e.target.dataset.category);
    }
}

// Funcion inicializadora

const init = () => {
    renderProducts();
    categories.addEventListener('click', applyFilter);
}

init()