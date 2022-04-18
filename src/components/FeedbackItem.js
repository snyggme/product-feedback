import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { calculateLength } from '../utils/products';

function FeedbackItem({ id, title, votes, comments, type, description, productId }) {
    const len = calculateLength(comments);

    return (
        <div className='feedbacks-item'>
            <div className='feedbacks-item-upvotes'>
                <div>
                    <i className="arrow-up"></i><div>{votes}</div>
                </div>
            </div>
            <div className='feedbacks-item-main'>
                <div className='feedbacks-item-main-title'>{title}</div>                
                <div className='feedbacks-item-main-desc'>{description}</div>
                <div className='feedbacks-item-main-type'>{type}</div>
            </div>
            <div className='feedbacks-item-msg-count'>
                <Link to={`/products/${productId}/comments/${id}`}>
                    <FontAwesomeIcon icon={faCommentAlt} size='xl' style={{color: '#3498db'}} /> {len}
                </Link>
            </div>
        </div>
    )
}

export default FeedbackItem;
