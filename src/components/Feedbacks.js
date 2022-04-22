import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import BackButton from "./BackButton";
import FeedbacksTitle from "./FeedbacksTitle";
import FeedbackItem from "./FeedbackItem";
import FeedbacksType from "./FeedbacksType";
import { getProduct, calculateLength } from '../utils/products';

function Feedbacks(props) {
    const { productId } = useParams();

    const { 
        products: { items }, 
        feedbacks,
        getFilteredFeedbacks, 
        setFeedbacksFilter, 
        setActiveFeedbacks 
    } = props;
    // feedbacks array is also named items so destruct it separate
    const { active, filter } = feedbacks;

    useEffect(() => {
        console.log(props)
        getFilteredFeedbacks(items, productId, active, filter)
    }, [items, productId, active, filter]);

    const product = getProduct(items, productId);

    return (
        <div className='feedbacks-main'>
            <aside>
                <BackButton to='/products' />
                <FeedbacksType setActive={setActiveFeedbacks} active={active}/>
            </aside>
            <section className="feedbacks-items-container">
                <FeedbacksTitle titleNumber={product.feedbacks.length} setFilter={setFeedbacksFilter} activeFilter={filter}/>
                {feedbacks.items.map(feedback => <FeedbackItem key={feedback.title} {...feedback} productId={productId} />)}
            </section>
        </div>
    )
}

export default Feedbacks;