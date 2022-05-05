import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faEye, faHeartCirclePlus } from '@fortawesome/free-solid-svg-icons';

const iconStyle = {
    paddingRight: '5px'
}

function ProductItem({ name, description, addLike, tooltip }) {
    return (
        <div className="product-item">
            <div className="product-item-name">
                <b>Product: {name}</b>
                <FontAwesomeIcon icon={faHeartCirclePlus} style={iconStyle} onClick={() => addLike(name.toLowerCase())} />
            </div>
            <div className="product-item-desc">{description}</div>
            <div className="product-item-link">
                <div>                
                    <FontAwesomeIcon icon={faAdd} style={iconStyle}/>
                    <Link className='element-underline-width' to={`/products/${name.toLowerCase()}/add`}>
                        Add feedback
                    </Link>
                </div>
                <div>                
                    <FontAwesomeIcon icon={faEye} style={iconStyle}/>
                    <Link className='element-underline-width' to={`/products/${name.toLowerCase()}`}>
                        See feedbacks
                    </Link>
                </div>


            </div>
        </div>
    )
}

export default ProductItem;