import ProductItem from './ProductItem';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { addLike, clearTooltip } from "../actions/LikeAction";
import { catchProducts } from "../actions/ProductAction";

function Products({ 
    products: { items, isLoading }, 
    catchProducts, addLike, clearTooltip, 
    likes: { tooltip, message: { text, likedProductId } } 
}) {
    useEffect(() => {
        catchProducts();
    }, [])

    if (isLoading)
        return <div className='loading'/>

    return (
        <div className='products-container'>
            {
                items.map(product => 
                    <ProductItem 
                        {...product} 
                        addLike={addLike} 
                        tooltip={tooltip && product.name.toLowerCase() === likedProductId} 
                        tooltipText={text} 
                        clearTooltip={clearTooltip}
                        key={product.name}
                    />)
            }
        </div>
    )
}

const mapStateToProps = store => {
    return {
        products: store.products,
        likes: store.likes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        catchProducts: () => dispatch(catchProducts()),
        addLike: (productId) => dispatch(addLike(productId)),
        clearTooltip: () => dispatch(clearTooltip())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Products);