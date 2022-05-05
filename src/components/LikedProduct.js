import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan } from '@fortawesome/free-solid-svg-icons';

const LikedProduct = ({ productId, deleteLike }) => {
	return (
		<div key={productId} className='liked-product-block'>
			<Link to={`/products/${productId}`}>
				{productId}
			</Link>
			<FontAwesomeIcon icon={faBan} onClick={() => deleteLike(productId)} />
		</div>
	)
}

export default LikedProduct;