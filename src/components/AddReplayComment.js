import { useState, useRef } from 'react';

function AddReplayComment({username}) {
    const [text, setText] = useState(`@${username}, `);

    const textArea = useRef(null);

    const handleTextArea = (e) => {
        setText(e.target.value)
    }

    return (
        <div className='replay-comment-container'>
            <textarea 
                ref={textArea}
                value={text}
                onChange={handleTextArea} 
                placeholder=''
                maxLength='250' />
            <button className='btn btn-post'>Post</button>
            <button className='btn btn-cancel'>Cancel</button>
        </div>
    )
}

export default AddReplayComment;