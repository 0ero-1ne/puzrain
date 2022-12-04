import '../components/main/Main.css';
import PDP from '../components/pdp/PDP';

export default function PDPPage() {
    document.querySelector('title').innerText = "Puzrain - Товар";

    return (
        <main>
            <div className="content">
                <PDP />
            </div>
        </main>
    );
}