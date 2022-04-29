import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import BackButton from "./BackButton";
import FeedbacksTitle from "./FeedbacksTitle";
import FeedbackItem from "./FeedbackItem";
import FeedbacksFilters from "./FeedbacksFilters";

function Feedbacks({
    feedbacks: { filtered, active, filter, isLoading },
    getFilteredFeedbacks, 
    setFeedbacksFilter, 
    setActiveFeedbacks,
    addUpvote,
    getFeedbacks
}) {
    const { productId } = useParams();

    useEffect(() => {
        getFeedbacks(productId);
        getFilteredFeedbacks(active, filter)
    }, [])
  
    if (isLoading)
        return <div className='loading'/>

    return (
        <div className='feedbacks-main'>
            <aside>
                <BackButton to='/products' />
                <FeedbacksFilters setActive={setActiveFeedbacks} active={active}/>
            </aside>
            <section className="feedbacks-items-container">
                <FeedbacksTitle titleNumber={filtered.length} setFilter={setFeedbacksFilter} activeFilter={filter}/>
                {filtered.map(feedback => <FeedbackItem key={feedback.title} {...feedback} productId={productId} addUpvote={addUpvote} />)}
            </section>
        </div>
    )
}

export default Feedbacks;
