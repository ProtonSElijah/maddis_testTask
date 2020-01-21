import '../css/item.css';

const Item = (dataItem, nextPage, openModalWindowOfItem, addItemToCart, itemsCart) => {
    let Item_container = document.createElement("div");
    Item_container.className = "Item-container";
    Item_container.id = dataItem.id;

    let itemImage = document.createElement("div");
    itemImage.className = "Item-image";
    itemImage.innerHTML = "<img src="+dataItem.image+" alt=image/>"
    itemImage.addEventListener("click", function(e) {
        openModalWindowOfItem(dataItem);
    });

    let itemCountConteiner = document.createElement("div");
    itemCountConteiner.className = "Item-countConteiner";
    itemCountConteiner.id = ""+dataItem.id+"CountContainer";

    let buyButton = document.createElement("div");
    buyButton.className = "Item-buyButton";
    if (dataItem.available) {buyButton.innerHTML = "<p>Купить за "+dataItem.price+" рублей</p>";}
    else {
        buyButton.classList = buyButton.className + " Item-buyButton-dis";
        buyButton.innerHTML = "<p>Нет в наличии</p>";
    }
    buyButton.onclick = function(e) {
        if (dataItem.available) {
            itemsCart[dataItem.id] =
                ((typeof itemsCart[dataItem.id] == "undefined") || (itemsCart[dataItem.id] == 0))
                ? 1 : itemsCart[dataItem.id] + 1;
            addItemToCart(dataItem.id);
        }
    }

    if (dataItem.available && ((typeof itemsCart[dataItem.id] != "undefined") && (itemsCart[dataItem.id] != 0))) {
        itemCountConteiner.style.visibility = "visible";
        itemCountConteiner.innerHTML = itemsCart[dataItem.id];
    }

    let itemTitle = document.createElement("div");
    itemTitle.className = "Item-title";
    itemTitle.innerHTML = "<p>"+dataItem.title+"</p>";

    Item_container.append(itemCountConteiner);
    Item_container.append(itemTitle);
    Item_container.append(itemImage);
    Item_container.append(buyButton);
    return Item_container;
}
export default Item;
