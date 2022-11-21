import Rights from "./Rights/Rights";
import SpecialWords from "./SpecialWords/SpecialWords";
import SocialNetworks from "./SocialNetworks/SocialNetworks";

import './Footer.css';

export default function Footer() {
    return (
        <footer>
            <div className="content">
                <Rights />
                <SpecialWords />
                <div className="footer-logo">
                    <img src="logo.svg" alt="Logo" width="80px" />
                </div>
                <SocialNetworks />
            </div>
        </footer>
    );
}