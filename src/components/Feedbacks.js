import { useParams } from "react-router-dom";
import { useState} from 'react';
import BackButton from "./BackButton";
import FeedbacksTitle from "./FeedbacksTitle";
import FeedbackItem from "./FeedbackItem";
import FeedbacksType from "./FeedbacksType";
import { getProducts } from '../utils/products';

function Feedbacks() {
    const [ activeFeedbacks, setActiveFeedbacks ] = useState('all');
    const [ feedbacksFilter, setFeedbacksFilter ] = useState('Most Upvotes');

    let params = useParams();
    const product = getProducts(params.productId);

    let feedbacks = product.feedbacks
    .filter(f => {
        if (activeFeedbacks.toLocaleLowerCase() === 'all')
            return true;
        
        return f.type.toLocaleLowerCase() === activeFeedbacks.toLocaleLowerCase();
    })
    .sort((a, b) => {
        switch (feedbacksFilter) {
            case 'Most Upvotes':
                return b.votes - a.votes;
            case 'Most Comments':
                return b.comments.length - a.comments.length;
            case 'Least Upvotes':
                return a.votes - b.votes;
            case 'Least Comments':
                return a.comments.length - b.comments.length;
            default:
                return 0;
        }
    });

    return (
        <div className='feedbacks-main'>
            <aside>
                <BackButton to='/products' />
                <FeedbacksType setActive={setActiveFeedbacks} active={activeFeedbacks}/>
            </aside>
            <section className="feedbacks-items-container">
                <FeedbacksTitle titleNumber={product.feedbacks.length} setFilter={setFeedbacksFilter} activeFilter={feedbacksFilter}/>
                {feedbacks.map(feedback => <FeedbackItem key={feedback.title} {...feedback} productId={params.productId} />)}
            </section>
        </div>
    )
}

export default Feedbacks;