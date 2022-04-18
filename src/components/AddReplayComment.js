import { useState, useRef } from 'react';
import { addFeedbackComment } from '../utils/products';
import { useParams } from "react-router-dom";

// TODO
// Add replay post with correct width so replay will nested

function AddReplayComment({ id, username, setReplayKey }) {
    const { productId, commentsId } = useParams();

    const [text, setText] = useState(`@${username}, `);

    const textArea = useRef(null);

    const handleTextArea = (e) => {
        setText(e.target.value);
    }

    const handlePost = () => {
        if (text.length !== 0 && text.trimEnd() !== `@${username},`) {
            setText('');
            setReplayKey(-1);
            addFeedbackComment(productId, text, commentsId, 'jimbo', id);
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

export default AddReplayComment;