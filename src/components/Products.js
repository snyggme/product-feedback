import ProductItem from './ProductItem';
// import { getProducts } from '../utils/products';
import { connect } from 'react-redux';
import { catchProducts } from '../actions/ProductAction';
import { useEffect } from 'react';

function Products({ products: {items, isLoading}, catchProducts }) {

    useEffect(() => {
        catchProducts();
    }, [])

    if (isLoading)
        return <div className='loading'/>

    return (
        <div className='products-container'>
            {
                items.map(item => (<ProductItem {...item} key={item.name}/>))
            }
        </div>
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
)(Products);
