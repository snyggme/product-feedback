
function SelectedProduct({ name, description }) {
  	return (
        <div className='selected-product'>
            <div className="name">
                <div><b>Product: </b><br/>{name}</div>
            </div>
            <div className="desc">{description}</div>
        </div>
  	);
}

export default SelectedProduct;
