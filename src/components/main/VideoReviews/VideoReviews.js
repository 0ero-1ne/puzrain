import './VideoReviews.css';

export default function VideoReviews() {
    return (
        <div className="main-videoreviews">
            <h2 className="video-header">Свежие видеобзоры</h2>
            <div className="videoreviews-videos">
                <iframe width="490" height="270" src="https://www.youtube.com/embed/C_nqXvwOXaw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="490" height="270" src="https://www.youtube.com/embed/r00ikilDxW4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    );
}