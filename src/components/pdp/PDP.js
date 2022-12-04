import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import PDPProduct from './PDPProduct/PDPProduct';
import Panel from './Panel/Panel';
import Description from './Description/Description';

import '../main/Main.css';
import './PDP.css';

export default function PDP() {
    return (
        <main>
            <div className="content">
                <div className="main-pdp">
                    <Breadcrumbs value="Catalog / 3x3 / Gan Super Puper 357" />  
                    <div className="main-pdp_control">
                        <PDPProduct />
                        <Panel />
                    </div>
                    <Description />
                    <div className="main-pdp_thanks">
                        Спасибо, что выбираете нас :)
                    </div>
                </div>
            </div>
        </main>
    );
}