import { useDispatch } from 'react-redux';
import { removeProduct, changeCount } from '../../../store/basketSlice';

import './Good.css';

export default function Good(props) {
    const product = props.product;

    const dispatch = useDispatch();
    const removeGood = () => dispatch(removeProduct({product}));

    const changeGoodCount = () => {
        let qty = document.getElementById(product._id + "-qty").value;
        if (qty === "0") {
           return removeGood(); 
        }
        if (qty === "")
            return;
        dispatch(changeCount({product, qty: +qty}));
        document.getElementById(product._id + "-qty").value = "";
    }

    return (
        <div className="basket-good">
            <div className="good-image">
                <a href={`/product?id=${product._id}`}>
                    <img src={`images/${product.category}/${product.title}-1.png`} alt={product.title} />
                </a>
            </div>
            <div className="good-description">
                <a href={`/product?id=` + product._id}>
                    {product.title}
                </a>
            </div>
            <div className="good-control">
                <div className="good-price">{product.price} BYN</div>
                <div className="good-qty good-field" onBlur={changeGoodCount}>
                    <input type="text" placeholder={product.basketQty} id={product._id + "-qty"} />
                </div>
                <div className="good-delete good-field" onClick={removeGood}>&#10060;</div>
            </div>
        </div>
    );
}