import './Panel.css';

export default function Panel() {
    const inStock = true;

    return (
        <div className="main-pdp_panel">
            <h2 className="pdp-panel_title">
                Gan Super Puper 357 
                {
                    inStock ? <span className="stock_status stock_status_true">В наличии</span> :
                              <span className="stock_status stock_status_false">Нет в наличии</span>
                }
            </h2>
            <div className="pdp-panel_main">
                <div className="pdp-panel_buttons">
                    <div className="pdp-panel_button basket_button">В корзину</div>
                    <div className="pdp-panel_button fav_button">В избранное</div>
                    <h3 className="pdp-panel_price">Цена: 157 BYN</h3>
                </div>
                <div className="pdp-panel_info">
                    <div className="panel-info_part">
                        <h3>Краткая информация о товаре</h3>
                        <div className="pdp-product_creator">Произодитель: Gan</div>
                        <div className="pdp-product_country">Страна выпуска: Китай</div>
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