import './ProductElement.css';

export default function ProductElement(prop) {
    return (
        <div className="main-product" key={prop.keyValue}>
            <div className="product-image"></div>
            <div className="product-description"></div>
            <div className="product-control">
                <div className="product-price"></div>
                <div className="product-tobasket product-button"></div>
                <div className="product-tofav product-button"></div>
            </div>
        </div>
    );
}