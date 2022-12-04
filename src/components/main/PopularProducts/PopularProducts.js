import ProductElement from '../ProductElement/ProductElement';

import './PopularProducts.css';

export default function PopularProducts() {
    let products = [];
    for (let i = 0; i < 8; i++) {
        products.push(
            <ProductElement key={"popular-" + i} />
        );
    }

    return (
        <div className="main-popproducts">
            <h2 className="popproducts-header">Популярные товары</h2>
            <div className="popproducts-list">
                {products}
            </div>
        </div>
    );
}