import './SocialNetworks.css';

export default function SocialNetworks() {
    return (
        <div className="footer-socialnets">
            <div className="footer-socialnets_item">
                <a href="https://www.facebook.com" target="_blank"><img src="facebook.svg" alt="Facebook" /></a>
            </div>
            <div className="footer-socialnets_item">
                <a href="https://www.vk.com" target="_blank"><img src="vk.svg" alt="Vkontakte" /></a>
            </div>
            <div className="footer-socialnets_item">
                <a href="https://www.instagram.com" target="_blank"><img src="instagram.png" alt="Instagram" /></a>
            </div>
            <div className="footer-socialnets_item">
                <a href="https://www.youtube.com" target="_blank"><img src="youtube.svg" alt="Youtube" /></a>
            </div>
            <div className="footer-socialnets_item">
                <a href="https://github.com/0ero-1ne" target="_blank"><img src="github.png" alt="GitHub" /></a>
            </div>
        </div>
    );
}