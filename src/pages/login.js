import '../components/main/Main.css';
import './styles/page.css';

export default function Login() {
    document.querySelector('title').innerText = "Puzrain - Авторизация";

    return (
        <div className="content">
            <div className="main-login">
                <h1>Авторизация</h1>
                <div className="main-login_form">
                    <form action="">
                        <label htmlFor="auth_login">Имя пользователя или E-mail</label>
                        <input type="text" id="auth_login" name="auth_login" required />
                        <label htmlFor="auth_password">Пароль</label>
                        <input type="password" id="auth_password" name="auth_password" required />
                        <input type="submit" value="Войти" />
                    </form>
                    <div className="main-form_links">
                        <p>Нет аккаунта? <a href="/register">Регистрация</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}