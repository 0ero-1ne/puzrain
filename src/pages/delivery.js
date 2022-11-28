import '../components/main/Main.css';
import './styles/page.css';

export default function About() {
    return (
        <main>
            <div className="content">
                <div className="main-infopage">
                    <h1>Доставка</h1>
                    <p>
                        Puzrain заботится о своих покупателях, и даже во время короновирусной инфекции.
                        Условия доставки нашей компании очень просты.
                        Мы предлагаем несколько типов доставки товара в руки покупателя.
                    </p>
                    <h2>Доставка курьером</h2>
                    <p>
                        Доставка курьером удобна тем, что товар подъезжает прямо вам к руки, и вам не надо никуда ходить (особенно актуально сегодня).
                        Однако курьер не поставляет товары в другую страну. 
                    </p>
                    <ol>
                        <p style={{textIndent: 0 + 'px'}}>Цена за доставку курьером варьируется в зависимости от пункта доставки товара:</p>
                        <li><b>7 BYN</b> - по району (в течении дня)</li>
                        <li><b>15 BYN</b> - по области (в течении 2-ух дней)</li>
                        <li>От <b>20 BYN</b> - по Беларуси (в течении 5-и дней)</li>
                    </ol>
                    <p className="infopage-images">
                        <img src="https://zagraninfo.com/wp-content/uploads/2021/08/Kurer-v-Amerike.jpg" alt="Курьер" />
                    </p>
                    <h2>Доставка почтой</h2>
                    <p>
                        Доставка почтой наиболее предпочительна теми, кто живет вдали от крупных городов.
                        Плюсом доставки почтой является меньшая стоимость посылки покупателю, однако придется дожидаться товара дольше.
                    </p>
                    <ol>
                        <p style={{textIndent: 0 + 'px'}}>
                            Цена за доставку почтой варьируется в зависимости от количества товара.
                            Обычно сумма доставки состовляет от <b>2.50 BYN</b> до <b>5 BYN</b>.
                        </p>
                    </ol>
                    <p className="infopage-images">
                        <img src="https://play-lh.googleusercontent.com/TwV3sn3smRokosrPxuzlgZyN2Gqn3M7Pxltoem-eEyT1JxkApbXQoOwKOPTLIluUfA" alt="Почта" />
                        <img src="https://logists.by/wp-content/uploads/2021/01/evropochta-1280x720.png" alt="Европочта" />
                    </p>
                    <h2>Самовывоз</h2>
                    <p>
                        Самовывоз удобен тем, кто живет рядом с пунктом выдачи товаров, которые находятся только в облатсных центрах.
                        В пункты выдачи все товары приходят в течении дня, а значит вы сможете забрать товар сразу же на следующий день после заказа.
                    </p>
                    <p style={{textIndent: 0 + 'px'}}>
                        Самовывоз - <b>0 BYN</b>
                    </p>
                    <p className="infopage-images">
                        <img src="https://spbzone.ru/image/data/shag5.png" alt="Почта" />
                    </p>
                </div>
            </div>
        </main>
    );
}