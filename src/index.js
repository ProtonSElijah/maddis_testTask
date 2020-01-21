import './index.css';
import './resetBrowser.css';

import Header from './components/header/js/header.js';
import Content from './components/content/js/content.js';
import Item from './components/content/js/item.js';
import ModalItem from './components/content/js/modalItem.js';

import data from './components/data.js';

const Application = () => {
    let app = document.createElement('div');
    app.className = "app";
    app.id = "app";
    document.body.append(app);

    let pagesCount = (data.length%15 == 0) ? Math.trunc(data.length/15) :  Math.trunc(data.length/15) + 1; //количество страниц
    let pageNumber = 1; // текущий номер страницы товаров
    let isNextPage = true; // переход на следующую страницу товаров
    let isPreviousPage = false; // переход на предыдущую страницу товаров
    let isRemovePage = true; //очистка страницы
    let currentData = data.slice(); //текущие товары

    let isActiveSortAscending = false; // активность сортировки по возрастанию
    let isActiveSortDescending = false; // активность сортировки по убыванию

    let noSortData = currentData.slice(); //данные без сортировки
    let searchFilter = ""; // поиск по имени для сортировок

    let itemsCart = {}; // товары в корзине
    let itemCount = 0; // число товаров в корзине

    let totalPrice = 0; // итоговая цена

    //Обновление localStorage
    const updateLocalStorage = () => {
        try {
            console.log(itemsCart);
            localStorage.setItem("itemsCart", JSON.stringify(itemsCart));
            localStorage.setItem("itemCount", itemCount);
            localStorage.setItem("totalPrice", totalPrice);
        } catch (e) {
            if (e == QUOTA_EXCEEDED_ERR) {
                console.log("Локальное хранилище переполнено");
            }
        }
    }

    //рендер товаров в корзине
    const renderItemList = () => {
        let list = document.getElementById("cart-listItems");
        list.innerHTML = "";
        for (let key in itemsCart) {

            let element = document.createElement("li");

            let decrementImg = document.createElement("img");
            decrementImg.setAttribute("src", "https://image.flaticon.com/icons/svg/753/753340.svg");
            decrementImg.setAttribute("alt", "button");

            for (let i = 0; i < data.length; i++) {
                if (data[i].id == key) {
                    element.innerHTML = "<p>"+data[i].title+": "+itemsCart[key]+"</p>";
                    decrementImg.onclick = function() {
                        deleteItemFromCart(data[i].id, list, data[i].price);
                    };
                }
            }
            element.prepend(decrementImg);
            list.append(element);
        }
    }

    //рендер итоговой цены
    const renderTotalPrice = () => {
        document.getElementById("totalPrice").innerHTML = "<p>Итого: "+totalPrice+" руб.";
        if (totalPrice == 0) document.getElementById("totalPrice").innerHTML = "";
    }

    //удаление товара из корзины
    const deleteItemFromCart = (id, list, dePrice) => {
        if (itemCount != 0) itemCount--;
        console.log(itemsCart[id]);
        if (itemsCart[id] != 0 && itemsCart[id] != null) {
            totalPrice -= dePrice;
            renderTotalPrice();
            itemsCart[id]--;
            if (itemsCart[id] == 0 && itemsCart[id] != null) delete itemsCart[id];
        }
        renderCartItem(id);
        renderItemList(list);

        updateLocalStorage();
    }

    //рендер корзины и количества товара
    const renderCartItem = (id) => {
        if (itemCount != 0) cartCounter.style.visibility = "visible";
        else cartCounter.style.visibility = "hidden";
        cartCounter.innerHTML = ""+itemCount;

        if (document.getElementById(""+id+"CountContainer") != null) {
            document.getElementById(""+id+"CountContainer").innerHTML = itemsCart[id];
            if (itemsCart[id] != 0 && typeof itemsCart[id] != "undefined")
                document.getElementById(""+id+"CountContainer").style.visibility = "visible";
            else
                document.getElementById(""+id+"CountContainer").style.visibility = "hidden";
        }
    }

    //добавление в корзину
    const addItemToCart = (id) => {
        let cartCounter = document.getElementById("cartCounter");
        itemCount++;
        renderCartItem(id);

        for (let i = 0; i < data.length; i++) {
            if (data[i].id == id) totalPrice += data[i].price;
            renderTotalPrice();
        }

        updateLocalStorage();
    }

    //Фильтр товаров по имени
    const onChangeNameSerch = (value) => {
        currentData = data.filter((dataObject) =>
            dataObject.title.toLowerCase().
            indexOf(value.toLowerCase()) > -1);
        noSortData = currentData.slice();
        searchFilter = value;

        if (isActiveSortAscending) currentData.sort((a, b) => a.price - b.price);
        if (isActiveSortDescending) currentData.sort((a, b) => b.price - a.price);

        reRender();
    }

    //Рендер количества страниц
    const renderPagesCount = () => {
        pagesCount = (currentData.length%15 == 0)
            ? Math.trunc(currentData.length/15)
            :  Math.trunc(currentData.length/15) + 1;
        renderNavigationCurrentPage();
    }

    //Переключение на следующую страницу товаров
    const nextPage = () => {
        if (isNextPage && currentData.length != 0) {
            removeCurrentPage();
            pageNumber++;
            if (15*pageNumber >= currentData.length) isNextPage=false;
            else isNextPage = true;
            isPreviousPage = true;

            renderPage();
            renderNavigationCurrentPage();
        }
    }

    //Переключение на предыдущую страницу товаров
    const previousPage = () => {
        if (isPreviousPage && currentData.length != 0) {
            removeCurrentPage();
            pageNumber--;
            if (15*pageNumber >= currentData.length) isNextPage=false;
            else isNextPage = true;
            if (pageNumber == 1) isPreviousPage = false;

            renderPage();
            renderNavigationCurrentPage();
        }
    }

    //Удаление текущей страницы товаров
    const removeCurrentPage = () => {
        let content_container = document.getElementById("content");
        content_container.innerHTML = "";
    }

    //Рендер новой страницы товаров
    const renderPage = () => {
        let content_container = document.getElementById("content");
        for (let i = 15*(pageNumber-1); i < (15*pageNumber < currentData.length ? 15*pageNumber : currentData.length); i++) {
            content_container.append(
                Item(currentData[i], nextPage, openModalWindowOfItem, addItemToCart, itemsCart));
        }
    }

    //рендер номера текущей страницы на панели навигации
    const renderNavigationCurrentPage = () => {
        let current_page = document.getElementById("navigationCurrentPage");
        current_page.innerHTML = ""+pageNumber+"/"+pagesCount;
    }

    //открытие модального окна товара
    const openModalWindowOfItem = (item) => {
        app.append(ModalItem(item, itemsCart, addItemToCart));
    }

    //Рендер пустой страницы
    const renderNothing = () => {
        if (isRemovePage) removeCurrentPage();
        let current_page = document.getElementById("navigationCurrentPage");
        current_page.innerHTML = "Пусто";
        let content_container = document.getElementById("content");
        content_container.innerHTML = "<p style='font-size: 3em' id='nothing'>По вашему запросу ничего не найдено</p>";
    }

    //Ререндер в соответствии с фильтром
    const reRender = () => {
        if (currentData.length != 0) {
            if (isRemovePage) removeCurrentPage();
            else if (!isRemovePage) document.getElementById("nothing").remove()
            pageNumber = 1;
            renderPagesCount();
            renderPage();
            isRemovePage = true;
        }
        else {
            renderNothing();
            isRemovePage = false;
        }
    }

    //Сортировка по возрастанию цены
    const priceSortAscending = () => {
        if (!isActiveSortAscending) {
            if (!isActiveSortDescending) noSortData = currentData.slice();
            currentData.sort((a, b) => a.price - b.price);
            isActiveSortAscending = true;
            document.getElementById("sortAscendingBlock").style.backgroundColor = "black";
            if (isActiveSortDescending) {
                document.getElementById("sortDescendingBlock").style.backgroundColor = "transparent";
                isActiveSortDescending = false;
            }
            reRender();
        }
        else {
            document.getElementById("sortAscendingBlock").style.backgroundColor = "transparent";
            currentData = noSortData.slice();
            isActiveSortAscending = false;
            if (searchFilter != "" && searchFilter != null) onChangeNameSerch(searchFilter);
            else reRender();
        }

    }

    //Сортировка по убыванию цены
    const priceSortDescending = () => {
        if (!isActiveSortDescending) {
            if (!isActiveSortAscending) noSortData = currentData.slice();
            currentData.sort((a, b) => b.price - a.price);
            isActiveSortDescending = true;
            document.getElementById("sortDescendingBlock").style.backgroundColor = "black";
            if (isActiveSortAscending) {
                document.getElementById("sortAscendingBlock").style.backgroundColor = "transparent";
                isActiveSortAscending = false;
            }
            reRender();
        }
        else {
            document.getElementById("sortDescendingBlock").style.backgroundColor = "transparent";
            currentData = noSortData.slice();
            isActiveSortDescending = false;
            if (searchFilter != "" && searchFilter != null) onChangeNameSerch(searchFilter);
            else reRender();
        }
    }

    app.append(Header(nextPage, previousPage, onChangeNameSerch, priceSortAscending, priceSortDescending, renderItemList));
    app.append(Content());

    /*localStorage.removeItem("totalPrice");
    localStorage.removeItem("itemCount");
    localStorage.removeItem("itemsCart");*/

    //загрузка данных из localStorage
    //Рендер элементов в соответствии с данными из localStorage
    if (localStorage.getItem("totalPrice") != null &&
        localStorage.getItem("itemCount") &&
        localStorage.getItem("itemsCart")) {
            totalPrice = Number(localStorage.getItem("totalPrice"));
            itemCount = Number(localStorage.getItem("itemCount"));
            itemsCart = JSON.parse(localStorage.getItem("itemsCart"));
            renderTotalPrice();
            renderItemList();
            if (itemCount != 0) {
                cartCounter.style.visibility = "visible";
                cartCounter.innerHTML = ""+itemCount;
            }
            else cartCounter.style.visibility = "hidden";
    }


    renderPage();
    renderNavigationCurrentPage();

    return app;
}

Application();
