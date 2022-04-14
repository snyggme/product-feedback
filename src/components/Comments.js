import { getProducts } from '../utils/products';
import { useParams } from "react-router-dom";
import BackButton from "./BackButton";
import FeedbackItem from "./FeedbackItem";
import CommentsItem from "./CommentsItem";

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
            <div className='feedback-comments-current-feedback'>
                <FeedbackItem {...feedback} productId={params.productId} />
            </div>
            <div className='feedback-comments-all-msgs'>
                {feedback.comments.map((comment, i) => <CommentsItem key={i} {...comment}/>)}
            </div>
            <div className='feedback-comments-add-comment'>ADD COMMENT</div>
        </div>
    )
}

export default Comments;