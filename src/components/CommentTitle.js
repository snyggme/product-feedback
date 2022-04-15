import BackButton from "./BackButton";

function CommentTitle({ productId }) {
    return (
        <div className='feedback-comments-edit-panel'>
            <BackButton to={`/products/${productId}`} />
            <button>Add feedback</button>
        </div>
    )
}

export default CommentTitle;