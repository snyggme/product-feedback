import { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { 
    setReplayKey, 
    postComment 
} from "../actions/CommentAction";

function AddReplayComment({ id, username, comments, setReplayKey, postComment }) {
    const [text, setText] = useState(`@${username}, `);

    const textArea = useRef(null);

    const handleTextArea = (e) => {
        setText(e.target.value);
    }

    const handlePost = () => {
        if (text.length !== 0 && text.trimEnd() !== `@${username},`) {
            setText('');
            setReplayKey(-1);
            postComment(comments, text, 'jimbo', id)
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

const mapStateToProps = store => {
    return {
        comments: store.comments.items
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setReplayKey: (key) => dispatch(setReplayKey(key)),
        postComment: (comments, comment, username, messageId, productId, commentsId) => dispatch(postComment(comments, comment, username, messageId, productId, commentsId))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddReplayComment);