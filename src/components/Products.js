import ProductItem from './ProductItem';
import { getProducts } from '../utils/products';

function Products() {
    const products = getProducts();
    return (
        <div className='products-container'>
            {
                products.map(item => (<ProductItem {...item} key={item.name}/>))
            }
        </div>
    )
}

export default Products;