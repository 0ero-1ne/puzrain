import './Basket.css';
import Good from './Good/Good';
import Card from './Card/Card';

export default function Basket() {
    return (
        <div className="main-basket">
            <div className="basket-goods">
                <Good />
                <Good />
                <Good />
                <Good />
                <Good />
                <Good />
            </div>
            <Card />
        </div>
    );
}