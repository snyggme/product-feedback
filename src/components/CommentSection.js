import CommentsItem from "./CommentsItem";

function CommentSection({ comments }) {
    let arr = [];

    const flatComments = ({ username, text, childs }, width) => {
        arr.push({username, text, width});

        if (childs.length > 0) {
            childs.map(child => flatComments(child, width - 13))
        }
    }

    comments.map(comment => flatComments(comment, 100))

    // flatComments({ username, text, childs }, 100)
    console.log(arr);
    return (
        <div className='feedback-comments-all-msgs'>
            {arr.map((comment, i) => <CommentsItem key={i} {...comment} />)}
        </div>
    )
}

export default CommentSection;