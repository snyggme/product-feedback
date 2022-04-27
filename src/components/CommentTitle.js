import { useNavigate } from "react-router-dom";
import BackButton from "./BackButton";

function CommentTitle({ productId }) {
    let navigate = useNavigate();
    
    return (
        <div className='feedback-comments-edit-panel'>
            <BackButton to={`/products/${productId}`} />
            <button onClick={() => navigate(`/products/${productId.toLowerCase()}/add`)}>
                + Add feedback
            </button>
        </div>
    )
}

export default CommentTitle;