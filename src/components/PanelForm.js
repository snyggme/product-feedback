import { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faCancel } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { addFeedback } from "../actions/ProductAction";

const iconStyle = {
    paddingRight: '10px'
}

function PanelForm({ addFeedback }) {
    const [state, setState] = useState({
        textarea: '',
        select: 'Feature',
        input: ''
    });

    const inputName = useRef(null);
    const textArea = useRef(null);
    const select = useRef(null);

    const { productId } = useParams();

    const handleChange = (type) => (e) => {
        setState({
            ...state,
            [type]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
 
        addFeedback({
            title: state.input,
            type: state.select,
            description: state.textarea
        }, productId);

        setState({
            textarea: '',
            input: '',
            select: 'Feature'
        })
    }

    const handleCancel = (e) => {
        e.preventDefault();

        setState({
            textarea: '',
            input: '',
            select: 'Feature'
        })
    }

  	return (
        <div className='panel-form'>
            <h1>Add feedback panel</h1>
            <form id='add-feedback-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="feedback-name">New feedback's name:</label><br/>
                    <input 
                        required 
                        ref={inputName}
                        value={state.input} 
                        onChange={handleChange('input')} 
                        type="text" 
                        id="feedback-name" 
                        placeholder="Feedback's name"
                    />
                </div>
                <div className='choose-type'>
                    <label htmlFor="standard-select">Choose feedback's type:</label><br/>
                    <div className='select'>
                        <select 
                            id="standard-select" 
                            ref={select} 
                            onChange={handleChange('select')}
                            value={state.select}
                        >
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
                        <label htmlFor="feedback-description">Add description:</label><br/>
                        <textarea 
                            ref={textArea}
                            value={state.textarea}
                            onChange={handleChange('textarea')} 
                            id="feedback-description"
                            placeholder="Write description here..." 
                            maxLength='250' />
                    </div>
                    <div className='textarea-container-btns'>
                        <button type="submit" className="btn btn-blue">
                            <FontAwesomeIcon icon={faAdd} style={iconStyle}/>
                            Add
                        </button>
                        <button className="btn btn-cancel" onClick={handleCancel}>
                            <FontAwesomeIcon icon={faCancel} style={iconStyle}/>
                            Cancel
                        </button>
                    </div>
                </div>
            </form>
        </div>
  	);
}

const mapDispatchToProps = dispatch => {
    return {
        addFeedback: (feedback, productId) => dispatch(addFeedback(feedback, productId))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(PanelForm);
