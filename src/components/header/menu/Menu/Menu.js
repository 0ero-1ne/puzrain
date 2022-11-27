import './Menu.css';

export default function Menu() {
    return (
        <div className="header-menu">
            <div className="header-menu_item"><a href="/about">О нас</a></div>
            <div className="header-menu_item"><a href="#">Доставка</a></div>
            <div className="header-menu_item"><a href="#">Контакты</a></div>
            <div className="header-menu_item"><a href="#">Адреса</a></div>
            <div className="header-menu_item"><a href="#">Оплата</a></div>
        </div>
    );
}