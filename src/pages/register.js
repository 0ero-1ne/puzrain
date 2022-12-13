import '../components/main/Main.css';
import './styles/page.css';

export default function Register() {
    document.querySelector('title').innerText = "Puzrain - Регистрация";

    return (
        <div className="content">
            <div className="main-login">
                <h1>Регистрация</h1>
                <div className="main-login_form">
                    <form action="http://localhost:3001/register" method="POST">
                        <label htmlFor="reg_username">Имя пользователя</label>
                        <input type="text" id="reg_username" name="reg_username" required />
                        <label htmlFor="reg_email">E-mail</label>
                        <input type="email" id="reg_email" name="reg_email" required />
                        <label htmlFor="reg_password">Пароль</label>
                        <input type="password" id="reg_password" name="reg_password" required />
                        <input type="hidden" value={window.location.origin} name="host" />
                        <input type="submit" value="Создать" />
                    </form>
                    <div className="main-form_links">
                        <p>Уже есть аккаунт? <a href="/login">Авторизация</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}