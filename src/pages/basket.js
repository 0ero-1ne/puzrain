import '../components/main/Main.css';
import Basket from '../components/basket/Basket';


export default function BasketPage() {
    document.querySelector('title').innerText = "Puzrain - Корзина";

    return (
        <div className="content">
            <Basket />
        </div>
    );
}