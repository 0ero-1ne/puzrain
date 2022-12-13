import { useState } from 'react';
import './Card.css';

let statePrice = 0;

function applyPromo(promos, sale, isPromo, setIsPromo) {
    const promo = document.getElementById('promo').value;

    if (promo === "") {
        alert("Вы не ввели промокод");
    } else {
        if (promos.indexOf(promo) !== -1 && (!isPromo)) {
            document.getElementById('promo_sale').innerHTML = sale;
            setIsPromo(true);
            document.getElementById('promo').value = "";
        } else {
            alert('Промокод не принят');
            document.getElementById('promo').value = "";
        }
    }
}

function changeSale (sale, isPromo) {
    if (isPromo) {
        document.getElementById('promo_sale').innerHTML = sale;
    }
}

export default function Card(props) {
    const [isPromo, setIsPromo] = useState(false);
    const products = props.products;
    const promos = ['puzrain', '0ero_1ne'];

    let amountOfProducts = 0, price = 0;

    for (let i = 0; i < products.length; i++) {
        amountOfProducts += products[i].basketQty;
        price += products[i].basketQty * products[i].price;
    }

    let sale = (Math.round(price / 100 * 10) * 100) / 100;
    
    if (price !== statePrice) {
        statePrice = price;
        changeSale(sale, isPromo);
    }

    return (
        <div className="basket-card">
            <div className="card-fullprice card-item">
                <div className="card-goodsqty">Товары, {amountOfProducts}шт</div>
                <div className="goods-price">{price} BYN</div>
            </div>
            <div className="card-sale card-item">
                <div>Скидка</div>
                <div className="sale-price"><span id="promo_sale">0</span> BYN</div>
            </div>
            <div className="card-amount card-item">
                <div className="amount-text">Итого</div>
                <div className="amount-price">{ isPromo ? price - sale : price } BYN</div>
            </div>
            <div className="card-promo card-item">
                <div className="card-promo-field">
                    <input type="text" placeholder="Введите промокод" id="promo" />
                </div>
                <div className="card-promo-apply" style={{cursor: 'pointer'}} onClick={() => applyPromo(promos, sale, isPromo, setIsPromo)}>
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