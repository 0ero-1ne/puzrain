import { useState, useEffect } from "react";

import Filters from './Filters/Filters';
import ProductsList from './ProductsList/ProductsList';

import '../main/Main.css';
import './PLP.css';

export default function PLP() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    if (products)
    return(
        <div className="main-plp">
            <h2 className="plp-header">Каталог</h2>
            <div className="plp-content">
                <Filters />
                <ProductsList products={products}/>
            </div>
        </div>
    );
}