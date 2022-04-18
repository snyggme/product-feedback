import { getProducts } from '../utils/products';
import { useParams } from "react-router-dom";
import CommentTitle from './CommentTitle';
import FeedbackItem from "./FeedbackItem";
import AddComment from "./AddComment";
import CommentSection from './CommentSection';

function Comments() {
    const { productId, commentsId } = useParams();
    const product = getProducts(productId);
    const feedback = product.feedbacks.find(item => item.id === Number(commentsId));
    
    return (
        <div className='feedback-comments-container'>
            <CommentTitle productId={productId} />
            <FeedbackItem {...feedback} productId={productId} />
            <CommentSection comments={feedback.comments} />
            <AddComment productId={productId} commentsId={commentsId}/>
        </div>
    )
}

export default Comments;