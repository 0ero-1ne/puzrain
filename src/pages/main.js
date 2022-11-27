import SpecialEvent from "../components/main/SpecialEvent/SpecialEvent";
import PopularProducts from "../components/main/PopularProducts/PopularProducts";
import VideoReviews from "../components/main/VideoReviews/VideoReviews";
import NewProducts from "../components/main/NewProducts/NewProducts";
import Comments from "../components/main/Comments/Comments";
import Companies from "../components/main/Companies/Companies";

import '../components/main/main.css';

export default function Main() {
    return (
        <main>
            <div className="content">
                <SpecialEvent />
                <PopularProducts />
                <VideoReviews />
                <NewProducts />
                <Comments />
                <Companies />
            </div>
        </main>
    );
}