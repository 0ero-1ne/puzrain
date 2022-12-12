import { useState, useEffect } from "react";
import ProductElement from "../../main/ProductElement/ProductElement";

import './ProductsList.css';

export default function ProductsList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

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