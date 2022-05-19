import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { connect } from 'react-redux';
import BackButton from "./BackButton";
import FeedbacksTitle from "./FeedbacksTitle";
import FeedbackItem from "./FeedbackItem";
import FeedbacksFilters from "./FeedbacksFilters";
import { 
    getFeedbacks,
    setFeedbacksFilter, 
    setActiveFeedbacks, 
    getFilteredFeedbacks,
    addUpvote
} from '../../actions/FeedbackAction';

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

const mapStateToProps = store => {
    return {
        feedbacks: store.feedbacks
    }
}

const mapDispatchToProps = dispatch => {
    return {

        getFeedbacks: (productId) => dispatch(getFeedbacks(productId)),
        getFilteredFeedbacks: (products, productId, active, filter) => dispatch(getFilteredFeedbacks(products, productId, active, filter)),
        setFeedbacksFilter: (filter) => dispatch(setFeedbacksFilter(filter)),
        setActiveFeedbacks: (active) => dispatch(setActiveFeedbacks(active)),
        addUpvote: (name, id) => dispatch(addUpvote(name, id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Feedbacks);
