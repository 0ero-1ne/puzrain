import { useState, useEffect } from "react";

import SpecialEvent from "../components/main/SpecialEvent/SpecialEvent";
import PopularProducts from "../components/main/PopularProducts/PopularProducts";
import VideoReviews from "../components/main/VideoReviews/VideoReviews";
import NewProducts from "../components/main/NewProducts/NewProducts";
import Comments from "../components/main/Comments/Comments";
import Companies from "../components/main/Companies/Companies";

import '../components/main/Main.css';

export default function Main() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const popularProducts = products.filter(product => product.status === "pop");
    const newProducts = products.filter(product => product.status === "new");

    if (products)
    return (
        <div className="content">
            <SpecialEvent />
            <PopularProducts products={popularProducts} />
            <VideoReviews />
            <NewProducts products={newProducts} />
            <Comments />
            <Companies />
        </div>
    );
}