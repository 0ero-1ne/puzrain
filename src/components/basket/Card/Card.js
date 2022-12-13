import './Card.css';

export default function Card(props) {
    const products = props.products;
    let amountOfProducts = 0, price = 0, sale = 0;

    for (let i = 0; i < products.length; i++) {
        amountOfProducts += products[i].basketQty;
        price += products[i].basketQty * products[i].price;
    }
    
    return (
        <div className="basket-card">
            <div className="card-fullprice card-item">
                <div className="card-goodsqty">Товары, {amountOfProducts}шт</div>
                <div className="goods-price">{price} BYN</div>
            </div>
            <div className="card-sale card-item">
                <div>Скидка</div>
                <div className="sale-price">{sale} BYN</div>
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