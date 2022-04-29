import { useParams } from "react-router-dom";
import CommentTitle from './CommentTitle';
import FeedbackItem from "./FeedbackItem";
import AddComment from "./AddComment";
import CommentSection from './CommentSection';
import { useEffect } from 'react';

function Comments(props) {
    const { productId, feedbackId } = useParams();

    useEffect(() => {
        props.getComments(feedbackId);
    }, [])

    const { feedback } = props.comments;

    return (
        <div className='feedback-comments-container'>
            <CommentTitle productId={productId} />
            <FeedbackItem {...feedback} productId={productId} addUpvote={props.addUpvote} />
            <CommentSection {...props} />
            <AddComment />
        </div>
    )
}

export default Comments;