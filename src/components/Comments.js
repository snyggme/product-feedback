import { getProducts } from '../utils/products';
import { useParams } from "react-router-dom";
import BackButton from "./BackButton";
import FeedbackItem from "./FeedbackItem";

function Comments() {
    let params = useParams();
    const product = getProducts(params.productId);
    const feedback = product.feedbacks.find(item => item.id === Number(params.commentsId));

    return (
        <div className='feedback-comments-container'>
            <div className='feedback-comments-edit-panel'>
                <BackButton to={`/products/${params.productId}`} />
                <button>Add feedback</button>
            </div>
            <div className='feedback-comments-current-feedback'><FeedbackItem {...feedback} productId={params.productId} /></div>
            <div className='feedback-comments-all-msgs'>
                {feedback.comments.map(comment => 
                    <div key={comment.username} className='feedback-comments-all-msgs-item'>
                        <div className='profile-img'>
                            
                        </div>
                        <div className='message-container'>
                            <div className='user-info'>
                                <div className='username'>{comment.username}</div>
                                <div className='replay'>Replay</div>
                            </div>
                            <div className='message-text'>{comment.text}</div>
                        </div>
                    </div>
                )}
            </div>
            <div className='feedback-comments-add-comment'>ADD COMMENT</div>
        </div>
    )
}

export default Comments;