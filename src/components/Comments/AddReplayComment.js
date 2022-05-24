import { useState, useRef } from 'react';
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';
import { 
    setReplayKey, 
    postComment 
} from "../../actions/CommentAction";

function AddReplayComment({ id, commentUsername, setReplayKey, postComment }) {
    const [text, setText] = useState(`@${commentUsername}, `);
    const { productId, feedbackId } = useParams();
    const textArea = useRef(null);

    const handleTextArea = (e) => {
        setText(e.target.value);
    }

    const handlePost = async () => {
        if (text.length !== 0 && text.trimEnd() !== `@${commentUsername},`) {
            setText('');
            setReplayKey(-1);
            const ret = await postComment(text, id, feedbackId, productId);
            console.log('returning from server', ret)
        }
    }

    return (
        <div className='replay-comment-container'>
            <textarea 
                ref={textArea}
                value={text}
                onChange={handleTextArea} 
                placeholder=''
                maxLength='250' />
            <button className='btn btn-post' onClick={handlePost}>Post</button>
            <button className='btn btn-cancel' onClick={() => setReplayKey(-1)}>Cancel</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        setReplayKey: (key) => dispatch(setReplayKey(key)),
        postComment: (comment, messageId, feedbackId, productId) => dispatch(postComment(comment, messageId, feedbackId, productId))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(AddReplayComment);
