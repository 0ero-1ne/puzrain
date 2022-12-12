import './ProductElement.css';

export default function ProductElement(props) {
    return (
        <div className={props.className + " main-product"}>
            <div className="product-image">
                <a href={"/product?id=" + props.value._id}>
                    <img src={`images/${props.value.category}/${props.value.title}-1.png`} alt={props.value.title} />
                </a>
            </div>
            <div className="product-description">
                <a href={"/product?id=" + props.value._id}>
                    {props.value.title}
                </a>
            </div>
            <div className="product-control">
                <div className="product-price">{props.value.price} BYN</div>
                <div className="product-tobasket product-button">
                    <img src="basket.png" alt="To Basket" />
                </div>
                <div className="product-tofav product-button">
                    <img src="fav.png" alt="To Fav" />
                </div>
            </div>
        </div>
    );
}