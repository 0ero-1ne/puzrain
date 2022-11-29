import './Card.css';

export default function Card() {
    return (
        <div className="basket-card">
            <div className="card-fullprice card-item">
                <div className="card-goodsqty">Товары, 6шт</div>
                <div className="goods-price">156 BYN</div>
            </div>
            <div className="card-sale card-item">
                <div>Скидка</div>
                <div className="sale-price">-27 BYN</div>
            </div>
            <div className="card-promo card-item">
                <div className="card-promo-field">
                    <input type="text" placeholder="Введите промокод" />
                </div>
                <div className="card-promo-apply">
                    Принять
                </div>
            </div>
            <div className="card-order card-item">Заказать</div>
            <div className="card-rules card-item">
                Я принимаю правила магазина
            </div>
        </div>
    );
}