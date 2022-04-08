import SignForm from "./SignForm";

function Modal({ type, setModal }) {

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
                <SignForm type={type} setModal={setModal}/>
            </div>
        </div>
    )
}

export default Modal;