import { forwardRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faCancel } from '@fortawesome/free-solid-svg-icons';

const iconStyle = {
    paddingRight: '10px'
}

const PanelFormTextArea = forwardRef((props, ref) => {
    return (
        <div className='textarea-container'>
            <div>
                <label htmlFor="feedback-description">Add description:</label><br/>
                <textarea 
                    ref={ref}
                    id="feedback-description"
                    placeholder="Write description here..." 
                    maxLength='250' />
            </div>
            <div className='textarea-container-btns'>
                <button type="submit" className="btn btn-blue">
                    <FontAwesomeIcon icon={faAdd} style={iconStyle}/>
                    Add
                </button>
                <button className="btn btn-cancel" onClick={props.handleCancel}>
                    <FontAwesomeIcon icon={faCancel} style={iconStyle}/>
                    Cancel
                </button>
            </div>
        </div>
    )
})


export default PanelFormTextArea;