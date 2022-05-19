import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { connect } from 'react-redux';
import CommentTitle from './CommentTitle';
import FeedbackItem from "../Feedbacks/FeedbackItem";
import AddComment from "./AddComment";
import CommentSection from './CommentSection';
import { addUpvote } from '../../actions/FeedbackAction';
import { getComments, setReplayKey } from "../../actions/CommentAction";

function Comments({ comments: { feedback, flatten, replayKey }, getComments, addUpvote, setReplayKey }) {
    const { productId, feedbackId } = useParams();

    useEffect(() => {
        getComments(feedbackId);
    }, [])

    return (
        <div className='feedback-comments-container'>
            <CommentTitle productId={productId} />
            <FeedbackItem {...feedback} productId={productId} addUpvote={addUpvote} />
            <CommentSection flatten={flatten} replayKey={replayKey} setReplayKey={setReplayKey} />
            <AddComment />
        </div>
    )
}

const mapStateToProps = store => {
    return {
        comments: store.comments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getComments: (products, productId, commentsId) => dispatch(getComments(products, productId, commentsId)),
        setReplayKey: (key) => dispatch(setReplayKey(key)),
        addUpvote: (name, id) => dispatch(addUpvote(name, id)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Comments);