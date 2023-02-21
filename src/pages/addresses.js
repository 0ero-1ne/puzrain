import '../components/main/Main.css';
import './styles/page.css';

export default function Addresses() {
    document.querySelector('title').innerText = "Puzrain - Адреса";

    return (
        <div className="content">
            <div className="main-infopage">
                <h1>Адреса</h1>
                <p>
                    <h3 style={{fontWeight: 500}}>Минская область:</h3>
                    <ol style={{marginTop: 5}}>
                        <li>ул. Бобруйская, д. 25</li>
                        <li>ул. Белорусская, д. 21</li>
                        <li>ул. Свердлова, д. 13а</li>
                    </ol>
                </p>
                <p>
                    <h3 style={{fontWeight: 500}}>Брестская область:</h3>
                    <ol style={{marginTop: 5}}>
                        <li>ул. Коммунальня, д. 44</li>
                        <li>ул. Железнодорожная, д. 11</li>
                    </ol>
                </p>
                <p>
                    <h3 style={{fontWeight: 500}}>Гомельская область:</h3>
                    <ol style={{marginTop: 5}}>
                        <li>ул. Гомельская, д. 25</li>
                        <li>ул. Брестская, д. 21</li>
                        <li>ул. Дачная, д. 13а</li>
                    </ol>
                </p>
                <p>
                    <h3 style={{fontWeight: 500}}>Гродненская область:</h3>
                    <ol style={{marginTop: 5}}>
                        <li>ул. Гродненская, д. 25</li>
                        <li>ул. Прямая, д. 21</li>
                    </ol>
                </p>
                <p>
                    <h3 style={{fontWeight: 500}}>Могилёвская область:</h3>
                    <ol style={{marginTop: 5}}>
                        <li>ул. Могилёвская, д. 15</li>
                        <li>ул. Кривая, д. 27</li>
                    </ol>
                </p>
                <p>
                    <h3 style={{fontWeight: 500}}>Витебская область:</h3>
                    <ol style={{marginTop: 5}}>
                        <li>ул. Витебская, д. 47</li>
                        <li>ул. Круглая, д. 1</li>
                    </ol>
                </p>
            </div>
        </div>
    );
}