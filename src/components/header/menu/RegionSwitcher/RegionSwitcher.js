import './RegionSwitcher.css';

export default function Menu()
{
    function showRegions() {
        let regionsBlockState = document.getElementsByClassName('regions')[0].style.display;
        
        regionsBlockState === "none" ? document.getElementsByClassName('regions')[0].style.display = "block" :
                                       document.getElementsByClassName('regions')[0].style.display = "none";
    }

    function setNewRegion(event) {
        const newRegion = event.target.innerText;
        document.getElementById('region').innerText = newRegion + " " +  String.fromCharCode(8595);
        document.getElementsByClassName('regions')[0].style.display = "none";
    }

    return(
        <div className="regswitch">
            <span id="region" onClick={showRegions}>Минск &#8595;</span>
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