import { useDispatch } from 'react-redux';
import { addProductToBasket } from '../../../store/basketSlice';
import { addProductToFav } from '../../../store/favSlice';

import './ProductElement.css';

export default function ProductElement(props) {
    const product = props.value;

    const dispatch = useDispatch();
    
    const addGoodToBasket = () => {
        if (dispatch(addProductToBasket({product}))) {
            alert('Товар добавлен в корзину!');
        }
    }

    const addGoodToFav = () => {
        if (dispatch(addProductToFav({product}))) {
            alert('Товар добавлен в избранное!');
        }
    }

    return (
        <div className={props.className + " main-product"}>
            <div className="product-image">
                <a href={"/product?id=" + product._id}>
                    <img src={`images/${product.category}/${props.value.title}-1.png`} alt={product.title} />
                </a>
            </div>
            <div className="product-description">
                <a href={"/product?id=" + product._id}>
                    {product.title}
                </a>
            </div>
            <div className="product-control">
                <div className="product-price">{product.price} BYN</div>
                <div className="product-tobasket product-button" onClick={addGoodToBasket}>
                    <img src="basket.png" alt="To Basket" />
                </div>
                <div className="product-tofav product-button" onClick={addGoodToFav}>
                    <img src="fav.png" alt="To Fav" />
                </div>
            </div>
        </div>
    );
}