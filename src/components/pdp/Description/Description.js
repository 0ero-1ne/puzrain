import parse from 'html-react-parser';
import './Description.css';

export default function Description(props) {
    return (
        <div className="main-pdp_description">
            <h2>Описание</h2>
            <div className="pdp-description_content">
                <div className="pdp-description_text">
                    {parse(props.value)}
                </div>    
                <div className="pdp-description_review">
                    <h2>Отзыв о товаре</h2>
                    <form action="http://localhost:3001/create_review" method="POST">
                        <label htmlFor="review_name">Имя</label>
                        <input type="text" name="review_name" id="review_name" required />
                        <label htmlFor="review_city">Город</label>
                        <input type="text" name="review_city" id="riview_city" required />
                        <label htmlFor="review_comment">Ваш комментарий</label>
                        <textarea name="review_comment" id="riview_comment" rows={5} maxLength={100} title="Максимальная длина - 100 символов" required></textarea>
                        <input type="hidden" value={props.img} name="review_productImg" />
                        <input type="hidden" value={"http://localhost:3000/reviews"} name="product_href" />
                        <input type="submit" value="Оставить отзыв" />
                    </form>
                </div>
            </div>
        </div>
    );
}