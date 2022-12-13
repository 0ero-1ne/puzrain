import ProductElement from "../../main/ProductElement/ProductElement";

import './ProductsList.css';

export default function ProductsList(props) {
    const products = props.products;
    
    const productsList = products.map(product => {
        return (
            <ProductElement key={product._id} value={product} className="plp-products_product"/>
        );
    })
    productsList.sort(() => Math.random() - 0.5);

    return (
        <div className="plp-content_products">
            {productsList}
        </div>
    );
}