import { useDispatch } from 'react-redux';
import { addProduct } from '../../../store/basketSlice';

import './Panel.css';

export default function Panel(props) {
    const product = props.product;
    const inStock = product.quantity ? true : false;

    const dispatch = useDispatch();
    
    const addGood = () => {
        if (dispatch(addProduct({product}))) {
            alert('Товар добавлен в корзину!');
        }
    }

    return (
        <div className="main-pdp_panel">
            <h2 className="pdp-panel_title">
                {product.title}
            </h2>
            <div className="pdp-panel_main">
                <div className="pdp-panel_buttons">
                    <div className={"pdp-panel_button stock_info " + (inStock ? "stock_status_true" : "stock_status stock_status_false")}>
                        {
                            inStock ? "В наличии" : "Нет в наличии"
                        }
                    </div>
                    <div className="pdp-panel_button basket_button" onClick={addGood}>В корзину</div>
                    <div className="pdp-panel_button fav_button">В избранное</div>
                    <h3 className="pdp-panel_price">Цена: {product.price} BYN</h3>
                </div>
                <div className="pdp-panel_info">
                    <div className="panel-info_part">
                        <h3>Кратко о товаре</h3>
                        <div className="pdp-product_creator">Произодитель: {product.company}</div>
                        <div className="pdp-product_country">Страна выпуска: {product.country}</div>
                        <div className="pdp-product_garanty">Гарантия: 6 месяцев</div>
                    </div>
                    <div className="panel-info_part">
                        <h3>Время доставки</h3>
                        <div className="pdp-product_creator">Курьером: около 2-5 дней</div>
                        <div className="pdp-product_country">Почтой: до 7 дней</div>
                        <div className="pdp-product_garanty">Самовывоз: до 1-2 дней</div>
                    </div>
                </div>
            </div>
        </div>
    );
}