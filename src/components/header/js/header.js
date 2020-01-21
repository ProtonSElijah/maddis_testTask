import '../css/header.css';

import Navigation from './navigation.js';
import Search from './search.js';
import PriceSort from './priceSort.js';
import Cart from './cart.js';

const Header = (nextPage, previousPage, onChangeNameSerch, priceSortAscending, priceSortDescending, renderItemList) => {
    let Header_container = document.createElement("div");
    Header_container.className = "Header-container";
    Header_container.id = "header";

    Header_container.append(Navigation(nextPage, previousPage));
    Header_container.append(Search(onChangeNameSerch));
    Header_container.append(PriceSort(priceSortAscending, priceSortDescending));
    Header_container.append(Cart(renderItemList));
    return Header_container;
}
export default Header;
