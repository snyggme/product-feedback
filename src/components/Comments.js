import { getProducts } from '../utils/products';
import { useParams } from "react-router-dom";
import BackButton from "./BackButton";

function Comments() {
    let params = useParams();
    const product = getProducts(params.productId);
    const comments = product.feedbacks[0].comments;

    return (
        <div className='feedbacks-main'>
            <BackButton to={`/products/${params.productId}`} />
            {comments.map(comment => <div>{comment.username} {comment.text}</div>)}
        </div>
    )
}

export default Comments;