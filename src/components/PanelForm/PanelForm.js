import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFeedback } from "../../actions/ProductAction";
import PanelFormInput from "./PanelFormInput";
import PanelFormSelect from "./PanelFormSelect";
import PanelFormTextArea from "./PanelFormTextArea";

function PanelForm({ addFeedback, productId }) {
    let navigate = useNavigate();

    const inputName = useRef(null);
    const textArea = useRef(null);
    const select = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const id = await addFeedback({
            title: inputName.current.value,
            type: select.current.value,
            description:textArea.current.value
        }, productId.toLowerCase());

        navigate(`/products/${id}`)
    }

    const handleCancel = (e) => {
        e.preventDefault();
        
        navigate(`/products/${productId.toLowerCase()}`)
    }

  	return (
        <div className='panel-form'>
            <h1>Add feedback panel</h1>
            <form id='add-feedback-form' onSubmit={handleSubmit}>
                <PanelFormInput ref={inputName} />
                <PanelFormSelect ref={select} />
                <PanelFormTextArea ref={textArea} handleCancel={handleCancel} />
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
