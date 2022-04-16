import CommentsItem from "./CommentsItem";

function CommentSection({ comments }) {
    const flatComments = (c) => {
        let arr = [];

        const setWidth = ({ username, text, childs }, width) => {
            arr.push({ username, text, width });
    
            if (childs.length > 0) {
                childs.map(child => setWidth(child, width - 13))
            }
        }

        c.map(comment => setWidth(comment, 100))

        return arr;
    }

    const flattenComments = flatComments(comments);
    
    return (
        <div className='feedback-comments-all-msgs'>
            {flattenComments.map((comment, i) => <CommentsItem key={i} {...comment} />)}
        </div>
    )
}

export default CommentSection;