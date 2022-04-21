import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import BackButton from "./BackButton";
import FeedbacksTitle from "./FeedbacksTitle";
import FeedbackItem from "./FeedbackItem";
import FeedbacksType from "./FeedbacksType";
import { getProduct } from '../utils/products';

function Feedbacks(props) {
    const { productId } = useParams();

    const { 
        products: { items, productFeedbacks: { feedbacks, activeType, filter } }, 
        getFilteredFeedbacks, 
        setFeedbacksFilter, 
        setActiveFeedbacks 
    } = props;

    useEffect(() => {
        getFilteredFeedbacks(items, productId, activeType, filter)
    }, [items, productId, activeType, filter]);
    
    const product = getProduct(items, productId);

    return (
        <div className='feedbacks-main'>
            <aside>
                <BackButton to='/products' />
                <FeedbacksType setActive={setActiveFeedbacks} active={activeType}/>
            </aside>
            <section className="feedbacks-items-container">
                <FeedbacksTitle titleNumber={product.feedbacks.length} setFilter={setFeedbacksFilter} activeFilter={filter}/>
                {feedbacks.map(feedback => <FeedbackItem key={feedback.title} {...feedback} productId={productId} />)}
            </section>
        </div>
    )
}

export default Feedbacks;