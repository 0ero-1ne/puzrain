import { useState, useEffect} from 'react';
import Comment from '../components/main/Comment/Comment';

import '../components/main/Main.css';
import './styles/page.css';

export default function Reviews() {
    const [reviews, setReviews] = useState();
    let result = [];
        
    useEffect(() => {
        fetch('http://localhost:3001/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(error => window.location.pathname = "/");
    }, []);

    document.querySelector('title').innerText = "Puzrain - Отзывы";

    if (reviews) {
        result = reviews.map(review => {
            return (
                <Comment key={review._id} comment={review} />
            );
        });
    }

    if (reviews)
    return (
        <div className="content">
            <h2 style={{fontWeight: 500, fontSize: 30, marginBottom: 20}} className="reviews-header">Отзывы о наших товарах</h2>
            <div className="main-reviews">
                {result.length > 0 ? result : <h2 style={{fontSize: 26, fontWeight: 500}}>Нет отзывов</h2>}
            </div>
        </div>
    );
}