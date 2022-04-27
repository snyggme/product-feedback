import { useParams } from 'react-router-dom';
import { getProduct } from '../utils/products';

function SelectedProduct({ items }) {
    const { productId } = useParams();
    const { name, description } = getProduct(items, productId);

  	return (
        <div className='selected-product'>
            <div className="name">
                <div>
                    <b>Product: </b><br/>{name}</div>
                </div>
            <div className="desc">{description}</div>
        </div>
  	);
}

export default SelectedProduct;
