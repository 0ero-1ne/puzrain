import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import PDPProduct from './PDPProduct/PDPProduct';
import Panel from './Panel/Panel';
import Description from './Description/Description';

import '../main/Main.css';
import './PDP.css';

export default function PDP(props) {
    const product = props.product;

    return (
        <div className="main-pdp">
            <Breadcrumbs value={`<a href="/catalog">Catalog</a> / ${product.category} / ${product.title}`} />
            <div className="main-pdp_control">
                <PDPProduct product={product} />
                <Panel product={product} />
            </div>
            <Description value={product.description}/>
            <div className="main-pdp_thanks">
                Спасибо, что выбираете нас :)
            </div>
        </div>
    );
}