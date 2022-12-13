import '../components/main/Main.css';
import './styles/page.css';

export default function ErrorPage() {
    document.querySelector('title').innerText = "Puzrain - Ошибка";

    return (
        <div className="content">
            <div className="main-error">
                <h1 style={{textAlign: 'center', fontSize: 100}}>404</h1>
                <h2 style={{textAlign: 'center', fontSize: 60}}>Страница не найдена</h2>
                <p style={{textAlign: 'center', marginTop: 20, fontSize: 20}}>Если вы считаете, что попали на эту страницу по ошибке, то обратитесь к нам по одному из <a href="/contacts">контактов</a></p>
            </div>
        </div>
    );
}