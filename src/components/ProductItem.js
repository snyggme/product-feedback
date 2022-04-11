import { Link } from 'react-router-dom';
 
function ProductItem({ name, description }) {
    return (
        <div className="product-item">
            <div className="product-item-name"><b>Product: </b>{name}</div>
            <div className="product-item-desc">{description}</div>
            <div className="product-item-link"><Link className='element-underline-width' to={`/products/${name.toLowerCase()}`}>See feedbacks</Link></div>
        </div>
    )
}

export default ProductItem;