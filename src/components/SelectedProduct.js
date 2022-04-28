import { useParams } from 'react-router-dom';
import { getProduct } from '../utils/products';
import { connect } from 'react-redux';

function SelectedProduct({ products }) {
    const { productId } = useParams();
    const { name, description } = getProduct(products, productId);

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

const mapStateToProps = store => {
    return {
        products: store.products.items
    }
}

export default connect(
    mapStateToProps,
    null
)(SelectedProduct);
