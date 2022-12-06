import ProductElement from "../../main/ProductElement/ProductElement";

import './ProductsList.css';

export default function ProductsList() {
    let products = [];

    for (let i = 0; i < 8; i++) {
        products.push(
            <ProductElement key={"catalog-" + i} />
        );
    }

    return (
        <div className="plp-content_products">
            {products}
        </div>
    );
}