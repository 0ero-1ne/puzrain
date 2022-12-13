import { useSelector } from 'react-redux';

import Good from './Good/Good';
import Card from './Card/Card';

import './Basket.css';

export default function Basket() {
    const products = useSelector(state => state.basket.basket);

    const resultProducts = products.map(product => {
        return (
            <Good key={product._id} product={product} />
        );
    });
    
    return (
        <div className="main-basket">
            <div className="basket-goods">
                {resultProducts}
            </div>
            <Card products={products} />
        </div>
    );
}