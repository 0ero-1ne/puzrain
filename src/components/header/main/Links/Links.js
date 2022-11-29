import './Links.css';

export default function Links() {
    return (
        <div className="header-links">
            <div className="header-link login">
                <a href="#"><img src="login.png" alt="Login" width="80px"/></a>
            </div>
            <div className="header-link fav">
                <a href="/basket"><img src="basket.png" alt="Login" width="80px"/></a>
            </div>
            <div className="header-link basket">
                <a href="#"><img src="fav.png" alt="Login" width="80px"/></a>
            </div>
        </div>
    );
}