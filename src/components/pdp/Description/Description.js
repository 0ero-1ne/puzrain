import parse from 'html-react-parser';
import './Description.css';

export default function Description(props) {
    return (
        <div className="main-pdp_description">
            <h2>Описание</h2>
            <div className="pdp-description_text">
                {parse(props.value)}
            </div>
        </div>
    );
}