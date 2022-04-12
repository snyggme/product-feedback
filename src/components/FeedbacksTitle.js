import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeed } from '@fortawesome/free-solid-svg-icons';

function FeedbacksTitle({ titleNumber }) {

    return (
        <div className='feedbacks-items-title'>
            <FontAwesomeIcon icon={faFeed} size='xl'/>
            <span className='feedbacks-items-title-number'>{titleNumber} Feedbacks</span>
            <p className='feedbacks-items-title-sortby'><span>Sort by :</span> Most Upvotes</p>  
            <button className='feedbacks-items-title-add-btn'>+ Add feedback</button>
        </div>
    )
}

export default FeedbacksTitle;