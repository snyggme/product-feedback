import ProductItem from './ProductItem';

function Products({ products }) {
    return (
        <div className='products-container'>
            {
                products.map(item => (<ProductItem {...item} key={item.name}/>))
            }
        </div>
    )
}

export default Products;
