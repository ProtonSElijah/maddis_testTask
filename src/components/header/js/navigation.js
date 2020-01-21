import '../css/navigation.css';

const Navigation = (nextPage, previousPage) => {
    let navigationPanel = document.createElement("div");
    navigationPanel.className = "Header-navigationPanel";

    //Кнопка вперёд
    let toNextPageButton = document.createElement("div");
    toNextPageButton.className = "navigationPanel-toNextPageButton";
    toNextPageButton.innerHTML = "<img src=https://image.flaticon.com/icons/svg/467/467282.svg alt=button />";
    toNextPageButton.onclick = function() {
        nextPage();
    }

    //Кнопка назад
    let toPreviousPageButton = document.createElement("div");
    toPreviousPageButton.className = "navigationPanel-toPreviousPageButton";
    toPreviousPageButton.innerHTML = "<img src=https://image.flaticon.com/icons/svg/467/467274.svg alt=button />";
    toPreviousPageButton.onclick = function() {
        previousPage();
    }

    //Текущая страница / всего страниц
    let currentPageBlock = document.createElement("div");
    currentPageBlock.className = "navigationPanel-currentPageBlock";
    currentPageBlock.innerHTML = "<p id='navigationCurrentPage'></p><p>Текущая страница</p>";

    navigationPanel.append(toPreviousPageButton);
    navigationPanel.append(currentPageBlock);
    navigationPanel.append(toNextPageButton);
    return navigationPanel;
}

export default Navigation;
