import { useState, useRef } from 'react';

const MAX_LEFT_CHARS = 250;

function AddComment({ postComment }) {    
    const [leftChars, setleftChars] = useState(MAX_LEFT_CHARS);
    const [text, setText] = useState('');

    const textArea = useRef(null);

    const handleTextArea = (e) => {
        setText(e.target.value)
        setleftChars(MAX_LEFT_CHARS - e.target.value.length)
    }

    const handleClick = () => {
        if (text.length !== 0) {
            setText('');
            postComment(text, 'jimbo', -1)
        }
    }

    return (
        <div className='feedback-comments-add-comment'>
            <span>Add Comment</span>
            <textarea 
                ref={textArea}
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

export default AddComment;