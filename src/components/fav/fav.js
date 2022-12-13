import { useSelector } from 'react-redux';
import FavProduct from './product/favProduct';

export default function Fav() {
    const favProducts = useSelector(state => state.fav.fav);
    
    const resultProducts = favProducts.map(product => {
        return (
            <FavProduct key={product._id} value={product} className={"fav-goods_good"} />
        );
    })

    return (
        <div className="main-fav">
            <div className="fav-goods">
                {resultProducts.length > 0 ? resultProducts : <h2 style={{fontSize: 26, fontWeight: 500}}>Нет товаров</h2>}
            </div>
        </div>
    );
}