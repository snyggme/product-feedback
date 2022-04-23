import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import BackButton from "./BackButton";
import FeedbacksTitle from "./FeedbacksTitle";
import FeedbackItem from "./FeedbackItem";
import FeedbacksType from "./FeedbacksType";
import { getProducts } from '../utils/products';

function Feedbacks(props) {
    const { productId } = useParams();

    const { 
        feedbacks: { items, active, filter },
        getFilteredFeedbacks, 
        setFeedbacksFilter, 
        setActiveFeedbacks,
        addUpvote
    } = props;
    // feedbacks array is also named items so destruct it separate
    // const { items, active, filter } = feedbacks;

    useEffect(() => {
        getFilteredFeedbacks(productId, active, filter)
    }, [productId, active, filter]);

    const product = getProducts(productId);

    return (
        <div className='feedbacks-main'>
            <aside>
                <BackButton to='/products' />
                <FeedbacksType setActive={setActiveFeedbacks} active={active}/>
            </aside>
            <section className="feedbacks-items-container">
                <FeedbacksTitle titleNumber={product.feedbacks.length} setFilter={setFeedbacksFilter} activeFilter={filter}/>
                {items.map(feedback => <FeedbackItem key={feedback.title} {...feedback} productId={productId} addUpvote={addUpvote} />)}
            </section>
        </div>
    )
}

export default Feedbacks;
