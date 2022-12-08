import ProductElement from '../ProductElement/ProductElement';

import './NewProducts.css';

export default function NewProducts() {
    let products = [];
    for (let i = 0; i < 8; i++) {
        products.push(
            <ProductElement key={"new-" + i} />
        );
    }

    return (
        <div className="main-newproducts">
            <h2 className="newproducts-header">Новые товары</h2>
            <div className="newproducts-list">
                {/* {products} */}
            </div>
        </div>
    );
}