import Products from "../components/Products";
import Feedbacks from "../components/Feedbacks";
import Comments from "../components/Comments";
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import { catchProducts } from "../actions/ProductAction";
import { 
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
        getFilteredFeedbacks: (products, productId, active, filter) => dispatch(getFilteredFeedbacks(products, productId, active, filter)),
        setFeedbacksFilter: (filter) => dispatch(setFeedbacksFilter(filter)),
        setActiveFeedbacks: (active) => dispatch(setActiveFeedbacks(active)),
        getComments: (products, productId, commentsId) => dispatch(getComments(products, productId, commentsId)),
        setReplayKey: (key) => dispatch(setReplayKey(key)),
        postComment: (comments, comment, username, messageId) => dispatch(postComment(comments, comment, username, messageId)),
        addUpvote: (name, id) => dispatch(addUpvote(name, id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsContainer);
