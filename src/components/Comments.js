import { useParams } from "react-router-dom";
import CommentTitle from './CommentTitle';
import FeedbackItem from "./FeedbackItem";
import AddComment from "./AddComment";
import CommentSection from './CommentSection';
import { useEffect } from 'react';

function Comments(props) {
    const { productId, feedbackId } = useParams();

    useEffect(() => {
        props.getComments(props.products.items, productId, feedbackId);
    }, [])

    const { feedback } = props.comments;

    return (
        <div className='feedback-comments-container'>
            <CommentTitle productId={productId} />
            <FeedbackItem {...feedback} productId={productId} />
            <CommentSection {...props} />
            <AddComment {...props}/>
        </div>
    )
}

export default Comments;