import Comment from "../Comment/Comment";
import './Comments.css';

export default function Comments() {
    let comments = [];
    for (let i = 0; i < 3; i++)
        comments.push(<Comment />);
    
    return (
        <div className="main-comments">
            <h2 className="comments-header">За нас говорят наши покупатели</h2>
            <div className="comments-items">
                {comments}
            </div>
            <span className="comments-more"><a href="#">Больше отзывов &#8594;</a></span>
        </div>
    );
}