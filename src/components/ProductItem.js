
 
function ProductItem({ name }) {
    return (
        <div className="product-item">
            <div><p>Name: </p>{name}</div>
            <div><p>Preview: </p>Lorem Ipsum</div>
            <div><a href=''>See feedbacks</a></div>
        </div>
    )
}

export default ProductItem;