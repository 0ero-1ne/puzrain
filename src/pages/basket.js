import '../components/main/Main.css';
import Basket from '../components/basket/Basket';


export default function BasketPage() {
    document.querySelector('title').innerText = "Puzrain - Корзина";

    return (
        <main>
            <div className="content">
                <Basket />
            </div>
        </main>
    );
}