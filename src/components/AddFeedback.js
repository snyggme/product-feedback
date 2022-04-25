import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faCancel } from '@fortawesome/free-solid-svg-icons';

const iconStyle = {
    paddingRight: '10px'
}

function AddFeedback() {
    const [text, setText] = useState('');

    

    const handleTextArea = (e) => {
        setText(e.target.value)
    }

    const inputName = useRef(null);
    const inputPass = useRef(null);
    const textArea = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  	return (
		<div className='add-feedback-panel'>
            <h1>Add feedback panel</h1>
            <form id='add-feedback-form' onSubmit={handleSubmit}>
                <div>
                    <label for="name">New feedback's name:</label><br/>
                    <input 
                        required 
                        ref={inputName} 
                        type="text" 
                        id="name" 
                        placeholder="feedback name"
                    />
                </div>
                <div>
                <label for="type">Choose feedback's type:</label><br/>
                    <input 
                        required 
                        ref={inputPass}
                        type="feature" 
                        id="type" 
                        placeholder="feedback type" 
                    />
                </div>
                <div className='textarea-container'>
                    <div>
                        <label for="description">Add description:</label><br/>
                        <textarea 
                            ref={textArea}
                            value={text}
                            onChange={handleTextArea} 
                            id="description"
                            placeholder="Write description here..." 
                            maxLength='250' />
                    </div>
                    <div className='textarea-container-btns'>
                        <button type="submit" className="btn btn-blue">
                            <FontAwesomeIcon icon={faAdd} size='m' style={iconStyle}/>
                            Add
                        </button>
                        <button className="btn btn-cancel">
                            <FontAwesomeIcon icon={faCancel} size='m' style={iconStyle}/>
                            Cancel
                        </button>
                    </div>
                </div>
            </form>
		</div>
  	);
}

export default AddFeedback;
