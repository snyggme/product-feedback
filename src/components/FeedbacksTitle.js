import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'

function FeedbacksTitle({ titleNumber }) {

    return (
        <div className='feedbacks-items-title'>
            {/* <FontAwesomeIcon icon="fa-regular fa-lightbulb-on" /> */}
            <FontAwesomeIcon icon={faLightbulb} />
            {titleNumber} Feedbacks
            <button>+ Add feedback</button>
        </div>
    )
}

export default FeedbacksTitle;