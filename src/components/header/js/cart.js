import '../css/cart.css';

const Cart = (renderItemList) => {
    let cart_container = document.createElement("div");
    cart_container.className = "Header-cart_conteiner";
    cart_container.innerHTML = "<img src=https://image.flaticon.com/icons/svg/1170/1170678.svg alt='cart' />";

    //Отображение количества товаров в корзине
    let cartCounter = document.createElement("div");
    cartCounter.className = "cart_conteiner-cartCounter";
    cartCounter.id = "cartCounter";

    //Выпадающий список товаров в корзине
    let cartItems = document.createElement("div");
    cartItems.className = "cart_conteiner-cartItems";
    let listItems = document.createElement("ul");
    listItems.id = "cart-listItems";

    let totalPrice = document.createElement("p");
    totalPrice.className = "cart_conteiner-totalPrice";
    totalPrice.id = "totalPrice";

    const show_cart = (e) => {
        cartItems.style.visibility = "visible";
        renderItemList();
    }

    const hide_cart = (e) => {
        cartItems.style.visibility = "hidden";
    }

    cartItems.append(listItems);

    cart_container.children[0].addEventListener("mouseenter", show_cart);
    cart_container.addEventListener("mouseleave", hide_cart);

    cart_container.append(totalPrice);
    cart_container.append(cartItems);
    cart_container.append(cartCounter);

    return cart_container;
}

export default Cart;
