import './Menu.css';

export default function Menu() {
    return (
        <nav className="header-menu">
            <div className="header-menu_item"><a href="/about">О нас</a></div>
            <div className="header-menu_item"><a href="/reviews">Отзывы</a></div>
            <div className="header-menu_item"><a href="/delivery">Доставка</a></div>
            <div className="header-menu_item"><a href="/contacts">Контакты</a></div>
            <div className="header-menu_item"><a href="/addresses">Адреса</a></div>
            <div className="header-menu_item"><a href="/payment">Оплата</a></div>
        </nav>
    );
}