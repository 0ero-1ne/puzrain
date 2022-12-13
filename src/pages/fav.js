import Fav from '../components/fav/fav';
import '../components/main/Main.css';

export default function FavPage() {
    document.querySelector('title').innerText = "Puzrain - Избранное";

    return (
        <div className="content">
            <Fav />
        </div>
    );
}