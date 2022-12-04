import RegionSwitcher from './menu/RegionSwitcher/RegionSwitcher';
import Menu from './menu/Menu/Menu';
import Catalog from './main/Catalog/Catalog';
import Searchbar from './main/Searchbar/Searchbar';
import Links from './main/Links/Links';

import './Header.css';

export default function Header()
{
    return (
        <header>
            <div className="content">
                <div className="header-row row-one">
                    <RegionSwitcher />
                    <Menu />
                </div>
                <div className="header-row row-two">
                    <div className="header-logo">
                        <a href="/"><img src="logo.svg" alt="Logo" width="80px" style={{display: 'block'}}/></a>
                    </div>
                    <Catalog />
                    <Searchbar />
                    <Links />
                </div>
            </div>
        </header>
    );
}