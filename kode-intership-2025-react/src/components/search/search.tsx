import { JSX } from "react";

function Search():JSX.Element {
    return (
        <header className="search">
            <div className="search__wrapper">
                <h2 className="search__title">Поиск</h2>
                <div className="search__field">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Введи имя, тег, почту..."
                />
                </div>
            </div>
        </header>
    );
}

export default Search;