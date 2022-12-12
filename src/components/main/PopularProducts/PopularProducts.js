import ProductElement from '../ProductElement/ProductElement';

import './PopularProducts.css';

export default function PopularProducts(props) {
    const popularProducts = props.products.map(product => {
        return(
            <ProductElement key={product._id} value={product} />
        );
    });

    return (
        <div className="main-popproducts">
            <h2 className="popproducts-header">Популярные товары</h2>
            <div className="popproducts-list">
                {popularProducts}
            </div>
        </div>
    );
}