import Filters from './Filters/Filters';
import ProductsList from './ProductsList/ProductsList';

import '../main/Main.css';
import './PLP.css';

export default function PLP() {
    return(
        <div className="main-plp">
            <h2 className="plp-header">Каталог</h2>
            <div className="plp-content">
                <Filters />
                <ProductsList />
            </div>
        </div>
    );
}