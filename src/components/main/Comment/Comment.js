import './Comment.css';

export default function Comment(props) {
    return (
        <div className="comments-comment">
            <div className="comment-img">
                <img src={`images/${props.comment.productImg}`} alt="Товар" />
            </div>
            <div className="comment-text">
                {props.comment.comment}
            </div>
            <span className="comment-author">
                {props.comment.name}, {props.comment.city}
            </span> 
        </div>
    );
}