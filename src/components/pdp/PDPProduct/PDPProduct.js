import './PDPProduct.css';

function setNewProductCover(event) {
    const coverImage = event.target.src;
    return document.getElementById('pdp-product_cover').src = coverImage;
}

export default function PDPProduct(props) {
    const product = props.product;
    
    return (
        <div className="main-pdp_product">
            <img src={`images/${product.category}/${product.title}-1.png`} alt={`${product.title}`} id="pdp-product_cover" />
            <div className="pdp-product_images">
                <div className="pdp-product_image">
                    <img onClick={setNewProductCover} src={`images/${product.category}/${product.title}-1.png`} alt={`${product.title}`} />
                </div>
                <div className="pdp-product_image">
                    <img onClick={setNewProductCover} src={`images/${product.category}/${product.title}-2.png`} alt={`${product.title}`} />
                </div>
                <div className="pdp-product_image">
                    <img onClick={setNewProductCover} src={`images/${product.category}/${product.title}-3.png`} alt={`${product.title}`} />
                </div>
            </div>
        </div>
    );
}