import { useParams } from "react-router-dom";
import BackButton from "./BackButton";
import FeedbacksTitle from "./FeedbacksTitle";
import { getProducts } from '../utils/products';

function Feedbacks() {
    let params = useParams();
    const product = getProducts(params.productId);
    
    return (
        <div className='feedbacks-main'>
            <aside>
                <BackButton />
                <div>Features</div>
            </aside>
            <section className="feedbacks-items-container">
                <FeedbacksTitle titleNumber={product.feedbacks.length} />
                {product.feedbacks.map(feedback => <div key={feedback.title} className='feedbacks-item'>{feedback.title}</div>)}
            </section>
        </div>
    )
}

export default Feedbacks;