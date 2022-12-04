import '../components/main/Main.css';
import './styles/page.css';

export default function Payment() {
    document.querySelector('title').innerText = "Puzrain - Оплата";

    return (
        <main>
            <div className="content">
                <div className="main-infopage">
                    <h1>Оплата</h1>
                    <p style={{textIndent: 0 + 'px'}}>
                        Наш сайт и компания предостовляет много способов оплатить товар; всё зависит от того, какой вам удобнее использовать.
                        Выбор состит из следующих возможностей:
                    </p>
                    <ol>
                        <li>
                            Онлайн на сайте при оформлении товара
                            <p>Мы принимаем оплату с электрнных кошельков и банковских карт следующих видов:</p>
                            <p className="infopage-images">
                                <img src="https://usa.visa.com/dam/VCOM/regional/ve/romania/blogs/hero-image/visa-logo-800x450.jpg" alt="Visa" style={{height: 100 + 'px'}}/>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/2560px-Mastercard-logo.svg.png" alt="Mastercard" style={{height: 100 + 'px'}} />
                                <img src="https://static.qiwi.com/img/providers/300x300/qiwi.png" alt="Qiwi" style={{height: 100 + 'px'}}/>
                                <img src="https://vsezaimyonline.ru/images/preview/zajm/yandex-money.png" alt="YMoney" style={{height: 100 + 'px'}}/>
                                <img src="https://www.webmoney.ru/img/icons/wmlogo_flat_256.png?1668773550" alt="WebMoney" style={{height: 100 + 'px'}}/>
                                <img src="https://dwglogo.com/wp-content/uploads/2016/08/PayPal_Logo_Icon.png" alt="PayPal" style={{height: 100 + 'px'}}/>
                            </p>
                        </li>
                        <li>
                            При получении товара наличными, либо банковской картой одного их тех типов, которые указаны выше.
                            <p>
                                При возможности, уточняйте в комментарии к заказу, что вы предоставите к оплате купюры больших номиналов, чтобы наши продавцы могли оперативно с вами рассщитаться.
                            </p>
                        </li>
                    </ol>
                </div>
            </div>
        </main>
    );
}