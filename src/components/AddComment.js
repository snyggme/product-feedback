import { useState } from 'react';
import { connect } from 'react-redux';
import { postComment } from "../actions/CommentAction";

const MAX_LEFT_CHARS = 250;

function AddComment({ postComment, username }) {    
    const [leftChars, setleftChars] = useState(MAX_LEFT_CHARS);
    const [text, setText] = useState('');

    const handleTextArea = (e) => {
        setText(e.target.value)
        setleftChars(MAX_LEFT_CHARS - e.target.value.length)
    }

    const handleClick = () => {
        if (text.length !== 0) {
            setText('');
            postComment(text, username, -1)
        }
    }

    return (
        <div className='feedback-comments-add-comment'>
            <span>Add Comment</span>
            <textarea 
                value={text}
                onChange={handleTextArea} 
                placeholder="Type your comment here..." 
                maxLength='250' />
            <div>
                <p>{leftChars} Characters left</p>
                <button onClick={handleClick}>Post Comment</button>
            </div>
        </div>
    )
}

const mapStateToProps = store => {
    return {
        username: store.auth.username
    }
}

const mapDispatchToProps = dispatch => {
    return {
        postComment: (comment, username, messageId) => dispatch(postComment(comment, username, messageId))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddComment);