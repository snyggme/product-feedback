
function FeedbacksFilters({ active, setActive }) {

    const handleClick = (e) => {
        setActive(e.target.innerText);
	} 
    
    return (
        <div className='choose-feedback-type'>
            {feedbackTypes.map(type => 
                <div 
                    key={type} 
                    className={`choose-feedback-type-item ${type.toLocaleLowerCase() === active.toLowerCase() ? 'active' : ''}`} 
                    onClick={handleClick}
                >
                    {type}
                </div>
            )}
        </div>
    )
}

const feedbackTypes = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];

export default FeedbacksFilters;