import { useDispatch } from 'react-redux';
import { addProductToBasket } from '../../../store/basketSlice';
import { removeProductFromFav } from '../../../store/favSlice';

import './favProduct.css';

export default function FavProduct(props) {
    const product = props.value;

    const dispatch = useDispatch();
    
    const addGoodToBasket = () => {
        if (dispatch(addProductToBasket({product}))) {
            alert('Товар добавлен в корзину!');
        }
    };

    const removeGoodFromFav = () => dispatch(removeProductFromFav({product}));

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
                <div className="product-fromfav product-button" onClick={removeGoodFromFav}>
                    &#10060;
                </div>
            </div>
        </div>
    );
}