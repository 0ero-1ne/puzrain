import { useState, useEffect } from "react";
import Comment from "../Comment/Comment";
import './Comments.css';

export default function Comments() {
    const [reviews, setReviews] = useState();
    let result = [];
        
    useEffect(() => {
        fetch('http://localhost:3001/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(error => window.location.pathname = "/");
    }, []);

    if (reviews) {
        result = reviews.map(review => {
            return (
                <Comment key={review._id} comment={review} />
            );
        });
    }

    result.length = result.length === 0 ? 0 : result.length >= 1 && result.length <=2 ? 2 : 3;

    if (result[0])
    return (
        <div className="main-comments">
            <h2 className="comments-header">За нас говорят наши покупатели</h2>
            <div className="comments-items">
                {result}
            </div>
            <span className="comments-more"><a href="/reviews">Больше отзывов &#8594;</a></span>
        </div>
    );
}