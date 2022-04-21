import Products from "../components/Products";
import Feedbacks from "../components/Feedbacks";
import Comments from "../components/Comments";
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import { 
    catchProducts, 
    setFeedbacksFilter, 
    setActiveFeedbacks, 
    getFilteredFeedbacks 
} from '../actions/ProductAction';

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
            <Route path=':productId/comments/:commentsId' element={<Comments {...props} />} />
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
        products: store.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        catchProducts: () => dispatch(catchProducts()),
        getFilteredFeedbacks: (products, productId, activeType, filter) => dispatch(getFilteredFeedbacks(products, productId, activeType, filter)),
        setFeedbacksFilter: (filter) => dispatch(setFeedbacksFilter(filter)),
        setActiveFeedbacks: (activeType) => dispatch(setActiveFeedbacks(activeType))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsContainer);
