import { useEffect, useState } from 'react';
import './Filters.css';
import Categories from './Categories/Categories';

export default function Filters(props) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);

    return (
        <div className="plp-content_filters">
            <Categories categories={categories} />
        </div>
    );
}