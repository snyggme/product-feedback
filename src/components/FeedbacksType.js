
function FeedbacksType() {
    
    return (
        <div className='choose-feedback-type'>
            {feedbackTypes.map(type => <div key={type} className={`choose-feedback-type-item ${type === 'All' ? 'active' : ''}`}>{type}</div>)}
        </div>
    )
}

const feedbackTypes = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];

export default FeedbacksType;