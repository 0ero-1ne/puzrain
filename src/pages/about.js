import '../components/main/Main.css';
import './about.css';

export default function About() {
    return (
        <main>
            <div className="content">
                <div className="main-about">
                    <h1>О нас</h1>
                    {/* <div className="about-logo">
                        <img src="logo.svg" alt="Logo" />
                    </div> */}
                    <p>
                        На сегодняшний день существует очень много развлечений и хобби.
                        Лично мы считаем, что одним из лучшим хобби - это speedcubing.
                        Speedcubing - это сборка головоломок на скорость, в которой многие люди таких успехов, что даже и представить нельзя.
                        Просто скажем вам, что рекорд по сборке самой популярной головоломки - кубика рубика - составляет около 3,47 секунды!
                        Этот рекорд поставил китайский speedcuber Юшенг Ду, опередив предыдущего рекордсмена, Феликса Земдегса, на 0,75 секунды!
                    </p>
                    <p className="about-images">
                        <img src="https://click-or-die.ru/app/uploads/2018/11/yusheng-du-record.jpg" alt="Юшенг Ду" />
                        <img src="https://homsk.com/upload/media/posts/2018-05/09/b1dde7464e41ccb5dd646a984738ff19_1525826020-b.jpg" alt="Феликс Земдегс" />  
                    </p>
                    <p>
                        Puzrain - это самый крупный интернет-магазин головоломок в Беларуси.
                        Наши склады находятся во все крупных городах страны, что позволяет нам оперативно доставить товар покупателям.
                        Наша история начинается с далёкого 2010 года, ещё тогда, когда головоломки только-только набирали популярность среди ольшого количества людей.
                        За 12 лет работы мы продали свыше 1,000,000 товаров разных типов, что говорит о нас, как о качественом и реально надёжном магазине.
                        Мы гарантируем качество товара, ведь его предоставляют самые известные гиганты в мире головоломок: Gan, DaYan, Dian Sheng, Moster Go и многие другие.
                        Мы гордимся тем, что с нами сотрудничают такие компании.
                    </p>
                    <p className="about-images">
                        <img src="https://149841463.v2.pressablecdn.com/wp-content/uploads/2022/01/Different-Types-of-Rubiks-Cube-800x500.jpg" alt="Кубы" />   
                        <img src="logo.svg" alt="Logo" />
                        <img src="https://i.pinimg.com/736x/c1/31/7e/c1317eaddf5314733a4ce436e4cda607--rubicks-cube-rubiks.jpg" alt="Ветрины магазина" />
                    </p>
                    <p>
                        Здесь вы можете найти головоломки абсолютно любого типа: от кубиков рубика 2х2 до мегаминксов.
                        Каждый год мы проводим акции на крупные праздники, а также предоставляем скидку в 10% в день рождения покупателя, и 20% скидку в день рождения магазина.
                        Мы за то, чтобы у вас по-настоящему хорошие впечатления от наших товаров.
                        Если вы по какой-либо причине сомневаетесь в нас, то мы просто прелоставляем вам возможность прочитать <a href="./#">отзывы</a> покупателей о нас!
                    </p>
                    <p className="about-images">
                        <img src="https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2018/03/08/c6bc389f-8eac-4b16-b547-2a58d0442808/een-rubiks-cube-oplossen" alt="Улыбка" />
                        <img src="https://chudo.tech/wp-content/uploads/2018/05/64fe91e9347372ecf0f163bb96754df8-799x445.jpg" alt="Феликс Земдегс" />
                    </p>
                </div>
            </div>
        </main>
    );
}