import { connect } from 'react-redux';
import { createUser, signinUser } from '../actions/AuthAction';
import SignForm from "./SignForm";

function Modal(props) {
    const { type, setModal } = props;

    const handleClick = () => {
        setModal({
            show: false,
            type
        })
    }
    
    return (
        <div className='modal'>
            <div className="modal-content">
                <div className="close" onClick={handleClick}>&times;</div>
                <SignForm {...props}/>
            </div>
        </div>
    )
}

const mapStateToProps = store => {
    return {
        auth: store.auth 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signinUser: (user) => dispatch(signinUser(user)),
        createUser: (user) => dispatch(createUser(user))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal);
