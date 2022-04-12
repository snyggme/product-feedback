

function FeedbackItem({ title, votes, comments }) {
    
    return (
        <div className='feedbacks-item'>
            <div className='feedbacks-item-upvotes'>{votes}</div>
            {title}
        </div>
    )
}

export default FeedbackItem;
