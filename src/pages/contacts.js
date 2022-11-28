import '../components/main/Main.css';
import './styles/page.css';

export default function Contacts() {
    return (
        <main>
            <div className="content">
                <div className="main-infopage">
                    <h1>Контакты</h1>
                    <p>
                        Мы всегда поддерживаем связь с нашими покупателями и партнёрами.
                        Вы можете связаться с нами следующими способами:
                    </p>
                    <ol>
                        <li>
                            Телефон
                            <p>
                                +375 (25) 111-22-33 - Life :)
                            </p>
                            <p>
                                +375 (29) 123-12-23 - МТС
                            </p>
                            <p>
                                +375 (44) 289-71-66 - А1
                            </p>
                        </li>
                        <li>
                            Электронная почта
                            <p>
                                info@puzrain.com - Информация
                            </p>
                            <p>
                                vacancies@puzrain.com - Вакансии
                            </p>
                            <p>
                                offers@puzrain.com - Ваши предложения
                            </p>
                            <p>
                                lament@puzrain.com - Жалобы. Надеемся на то, что почтовый ящик будет таким же пустым)
                            </p>
                        </li>
                    </ol>
                </div>
            </div>
        </main>
    );
}