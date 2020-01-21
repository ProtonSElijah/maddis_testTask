import '../css/search.css';

const Search = (onChangeNameSerch) => {
    let searchItem = document.createElement("div");
    searchItem.className = "Header-searchItem";

    //Поле поиска
    let searchField = document.createElement("input");
    searchField.setAttribute("placeholder", "Поиск по имени");
    searchField.setAttribute("type", "text");
    searchField.setAttribute("value", "");
    searchField.oninput = function(e) {
        onChangeNameSerch(searchField.value);
    }

    searchItem.append(searchField);

    return searchItem;
}

export default Search;
