import { useState, useEffect } from 'react';
import '../components/main/Main.css';
import PDP from '../components/pdp/PDP';

export default function PDPPage() {
    const [product, setProduct] = useState();
        
    useEffect(() => {
        fetch('http://localhost:3001/product?id=' + window.location.search.match(new RegExp('id=([^&=]+)'))[1])
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(error => window.location.pathname = "/");
    }, []);

    document.querySelector('title').innerText = "Puzrain - Товар";

    if (product) 
        return (
            <div className="content">
                <PDP product={product} />
            </div>
        );
}