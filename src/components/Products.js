import ProductItem from './ProductItem';

function Products({ products: { items } }) {
    return (
        <div className='products-container'>
            {
                items.map(item => (<ProductItem {...item} key={item.name}/>))
            }
        </div>
    )
}

export default Products;
