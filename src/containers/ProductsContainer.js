import Products from "../components/Products";
import Feedbacks from "../components/Feedbacks";
import Comments from "../components/Comments";
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import { catchProducts } from '../actions/ProductAction';

function ProductsContainer({ products: {items, isLoading}, catchProducts }) {
    useEffect(() => {
        catchProducts();
    }, [])

    if (isLoading)
        return <div className='loading'/>

    return (
        <Routes>
            <Route path='/' element={<Products products={items}/>} />
            <Route path=':productId' element={<Feedbacks {...items} />} />
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
    }
}

const mapDispatchToProps = dispatch => {
    return {
        catchProducts: () => dispatch(catchProducts()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsContainer);
