import '../css/priceSort.css';

const PriceSort = (priceSortAscending, priceSortDescending) => {
    let sortBlock = document.createElement("div");
    sortBlock.className = "Header-sortBlock";

    //Кнопка сортировки по возрастанию
    let sortAscending = document.createElement("div");
    sortAscending.className = "Header-iconSort";
    sortAscending.innerHTML = "<img src=https://image.flaticon.com/icons/svg/1634/1634802.svg alt=sort />";
    sortAscending.id = "sortAscendingBlock";
    sortAscending.onclick = function() {
        priceSortAscending();
    }

    //Кнопка сортировки по убыванию
    let sortDescending = document.createElement("div");
    sortDescending.className = "Header-iconSort";
    sortDescending.innerHTML = "<img src=https://image.flaticon.com/icons/svg/1634/1634820.svg alt=sort />";
    sortDescending.id = "sortDescendingBlock";
    sortDescending.onclick = function() {
        priceSortDescending();
    }

    sortBlock.append(sortAscending);
    sortBlock.append(sortDescending);

    return sortBlock;
}

export default PriceSort;
