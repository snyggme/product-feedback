import ProductItem from './ProductItem';

function Products({ products: { items }, addLike }) {
    return (
        <div className='products-container'>
            {
                items.map(item => (<ProductItem {...item} addLike={addLike} key={item.name}/>))
            }
        </div>
    )
}

export default Products;
