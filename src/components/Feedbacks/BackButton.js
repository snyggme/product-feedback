import { Link } from 'react-router-dom';

function BackButton({ to }) {

    return (
        <div className='go-back-button'>
           <Link to={to}><i className="arrow-left"></i> Go Back</Link>
        </div>
    )
}

export default BackButton;