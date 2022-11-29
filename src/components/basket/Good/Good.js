import './Good.css';

export default function Good() {
    return (
        <div className="basket-good">
            <div className="good-image"></div>
            <div className="good-description">Gan 365 X Super Puper</div>
            <div className="good-control">
                <div className="good-price">Цена: 157 BYN</div>
                <div className="good-qty good-field"></div>
                <div className="good-delete good-field"></div>
            </div>
        </div>
    );
}