import { useState } from 'react';

import './RegionSwitcher.css';

export default function Menu()
{
    const [region, setRegion] = useState('Минск');
    function showRegions() {
        let regionsBlockState = document.getElementsByClassName('regions')[0].style.display;
        
        regionsBlockState === "none" ? document.getElementsByClassName('regions')[0].style.display = "block" :
                                       document.getElementsByClassName('regions')[0].style.display = "none";
    }

    function setNewRegion(event) {
        const newRegion = event.target.innerText;
        setRegion(newRegion);
        document.getElementsByClassName('regions')[0].style.display = "none";
        return;
    }

    return(
        <div className="regswitch">
            <span id="region" onClick={showRegions}>{region} &#8595;</span>
            <div className="regions" style={{display: "none"}}>
                <div className="region-item" onClick={setNewRegion}>Брест</div>
                <div className="region-item" onClick={setNewRegion}>Витебск</div>
                <div className="region-item" onClick={setNewRegion}>Гомель</div>
                <div className="region-item" onClick={setNewRegion}>Гродно</div>
                <div className="region-item" onClick={setNewRegion}>Минск</div>
                <div className="region-item" onClick={setNewRegion}>Могилев</div>
            </div>
        </div>
    );
}