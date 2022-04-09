import ProductItem from './ProductItem';

function Products() {
    return (
        <div className='products-container'>
            {
                products.map(item => (
                    <ProductItem {...item} key={item.name}/>
                ))
            }
        </div>
    )
}

const products = [{ name: 'Google' }, { name: 'Google' }, { name: 'Google' }, { name: 'Google' }, { name: 'Google' }, { name: 'Google' }, { name: 'Google' }, { name: 'Google' }]

export default Products;