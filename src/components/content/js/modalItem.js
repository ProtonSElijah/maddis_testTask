import '../css/modalItem.css';

const ModalItem = (Item, itemsCart, addItemToCart) => {
    let modal_environment = document.createElement("div");
    modal_environment.className = "modalItem-environment";
    modal_environment.id = "modalItem-modal";

    window.addEventListener("click", function(e) {
        if (e.target == modal_environment) {
            modal_environment.remove();
            document.body.style.cursor = "default";
        }
    });
    window.addEventListener("mousemove", function(e) {
        if (e.target == modal_environment)
            document.body.style.cursor = "pointer";
    });
    window.addEventListener("mouseout", function(e) {
        if (e.target == modal_environment)
            document.body.style.cursor = "default";
    });

    let modal = document.createElement("div");
    modal.className = "modalItem-modal";

    let firstBlock = document.createElement("div");
    firstBlock.className = "modalItem-firstBlock";

    let image = document.createElement("div");
    image.className = "modalItem-image";
    image.innerHTML = "<img src="+Item.image+" alt='image'/>";

    let desription = document.createElement("div");
    desription.className = "modalItem-description";
    desription.innerHTML = "<p>"+Item.descr+"</p>";

    let title = document.createElement("div");
    title.className = "modalItem-title";
    title.innerHTML = "<p>"+Item.title+" ("+Item.price+" руб. )</p>";

    let secondBlock = document.createElement("div");
    secondBlock.className = "modalItem-firstBlock-secondBlock";

    let buyButton = document.createElement("div");
    buyButton.className = "modalItem-secondBlock-buyItem";
    buyButton.innerHTML = "<p>Добавить в корзину</p>";
    buyButton.onclick = function(e) {
        if (Item.available) {
            itemsCart[Item.id] = ((typeof itemsCart[Item.id] == "undefined") || (itemsCart[Item.id] == 0))
                ? 1 : itemsCart[Item.id] + 1;
            addItemToCart(Item.id);
        }
    }

    firstBlock.append(image);
    firstBlock.append(secondBlock);

    secondBlock.append(buyButton);
    secondBlock.append(desription);

    modal.append(title);
    modal.append(firstBlock);

    modal_environment.append(modal)
    return modal_environment;
}

export default ModalItem;
