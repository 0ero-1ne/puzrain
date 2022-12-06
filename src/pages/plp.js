import PLP from "../components/plp/PLP";

export default function PLPPage () {
    document.querySelector('title').innerText = "Puzrain - Каталог";

    return (
        <main>
            <div className="content">
                <PLP />
            </div>
        </main>
    );
}