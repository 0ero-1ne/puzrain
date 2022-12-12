import ProductElement from '../ProductElement/ProductElement';

import './NewProducts.css';

export default function NewProducts(props) {
    const newProducts = props.products.map(product => {
        return(
            <ProductElement key={product._id} value={product} />
        );
    });

    return (
        <div className="main-newproducts">
            <h2 className="newproducts-header">Новые товары</h2>
            <div className="newproducts-list">
                {newProducts}
            </div>
        </div>
    );
}