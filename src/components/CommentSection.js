import CommentsItem from "./CommentsItem";

function CommentSection({ comments }) {
    return (
        <div className='feedback-comments-all-msgs'>
            {comments.map((comment, i) => <CommentsItem key={i} {...comment}/>)}
        </div>
    )
}

export default CommentSection;