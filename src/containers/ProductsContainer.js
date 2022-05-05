import Products from "../components/Products";
import Feedbacks from "../components/Feedbacks";
import Comments from "../components/Comments";
import AddFeedback from "../components/AddFeedback";
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import { catchProducts, addFeedback } from "../actions/ProductAction";
import { 
    getFeedbacks,
    setFeedbacksFilter, 
    setActiveFeedbacks, 
    getFilteredFeedbacks,
    addUpvote
} from '../actions/FeedbackAction';
import { 
    getComments, 
    setReplayKey, 
    postComment 
} from "../actions/CommentAction";
import { addLike } from "../actions/LikeAction";

function ProductsContainer(props) {
    useEffect(() => {
        props.catchProducts();
    }, [])

    const { isLoading } = props.products;

    if (isLoading)
        return <div className='loading'/>
        
    return (
        <Routes>
            <Route path='/' element={<Products {...props} />} />
            <Route path=':productId' element={<Feedbacks {...props} />} />
            <Route path=':productId/comments/:feedbackId' element={<Comments {...props} />} />
            <Route path=':productId/add' element={<AddFeedback />} />
            <Route
                path="*"
                element={
                    <main style={{ padding: "1rem" }}>
                        <p>There's nothing here!</p>
                    </main>
                }
			/>
        </Routes>
    )
    
}

const mapStateToProps = store => {
    return {
        products: store.products,
        feedbacks: store.feedbacks,
        comments: store.comments,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        catchProducts: () => dispatch(catchProducts()),
        getFeedbacks: (productId) => dispatch(getFeedbacks(productId)),
        getFilteredFeedbacks: (products, productId, active, filter) => dispatch(getFilteredFeedbacks(products, productId, active, filter)),
        setFeedbacksFilter: (filter) => dispatch(setFeedbacksFilter(filter)),
        setActiveFeedbacks: (active) => dispatch(setActiveFeedbacks(active)),
        getComments: (products, productId, commentsId) => dispatch(getComments(products, productId, commentsId)),
        setReplayKey: (key) => dispatch(setReplayKey(key)),
        postComment: (comment, username, messageId) => dispatch(postComment(comment, username, messageId)),
        addUpvote: (name, id) => dispatch(addUpvote(name, id)),
        addFeedback: (feedback, productId) => dispatch(addFeedback(feedback, productId)),
        addLike: (productId) => dispatch(addLike(productId))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsContainer);
