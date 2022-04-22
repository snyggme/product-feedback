import { useParams } from "react-router-dom";
import CommentTitle from './CommentTitle';
import FeedbackItem from "./FeedbackItem";
import AddComment from "./AddComment";
import CommentSection from './CommentSection';
import { useEffect } from 'react';

function Comments({ products, comments: { feedback, items, flatten }, getComments }) {
    const { productId, commentsId } = useParams();

    useEffect(() => {
        getComments(products.items, productId, commentsId);
    }, [])
    
    return (
        <div className='feedback-comments-container'>
            <CommentTitle productId={productId} />
            <FeedbackItem {...feedback} productId={productId} />
            <CommentSection flattenComments={flatten} />
            <AddComment productId={productId} commentsId={commentsId}/>
        </div>
    )
}

export default Comments;