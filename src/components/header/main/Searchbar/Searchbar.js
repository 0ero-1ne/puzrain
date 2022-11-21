import './Searchbar.css';

export default function Searchbar() {
    return(
        <div className="header-searchbar">
            <form action="" id="search-form"></form>
            <div className="searchbar_content">
                <input type="text" name="search-query" className="serach-input" form="search-form" placeholder='Поиск на Puzrain...'/>
                <input type="submit" value="Найти" form="search-form" />
            </div>
        </div>
    );
}