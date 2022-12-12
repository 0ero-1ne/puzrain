import parse from 'html-react-parser';

export default function Breadcrumbs(props) {
    return (
        <p className="pdp-breacrumbs">
            {parse(props.value)}
        </p>
    );
}