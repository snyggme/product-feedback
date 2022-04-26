import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faCancel } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { getProduct } from '../utils/products';

const iconStyle = {
    paddingRight: '10px'
}

function AddFeedback({ products: {items} }) {
    const [text, setText] = useState('');

    const { productId } = useParams();
    const { name, description } = getProduct(items, productId);

    const handleTextArea = (e) => {
        setText(e.target.value)
    }

    const inputName = useRef(null);
    const textArea = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  	return (
        <div className='add-feedback-panel'>
            <div className='selected-product'>
                <div className="name"><b>Product: </b>{name}</div>
                <div className="desc">{description}</div>
            </div>
            <div className='panel-form'>
                <h1>Add feedback panel</h1>
                <form id='add-feedback-form' onSubmit={handleSubmit}>
                    <div>
                        <label for="name">New feedback's name:</label><br/>
                        <input 
                            required 
                            ref={inputName} 
                            type="text" 
                            id="name" 
                            placeholder="Feedback name"
                        />
                    </div>
                    <div className='choose-type'>
                        <label for="type">Choose feedback's type:</label><br/>
                        <div className='select'>
                            <select id="standard-select">
                                <option value="Feature">Feature</option>
                                <option value="UI">UI</option>
                                <option value="UX">UX</option>
                                <option value="Enhancement">Enhancement</option>
                                <option value="Bug">Bug</option>
                            </select>
                            <span className="focus"></span>
                        </div>
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
        </div>
  	);
}

export default AddFeedback;
