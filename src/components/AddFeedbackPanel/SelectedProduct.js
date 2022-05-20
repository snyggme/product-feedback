import { forwardRef } from "react";
import HiddenProduct from './HiddenProduct';

const SelectedProduct = forwardRef((props, ref) => {
  	return (
            <div style={{position: 'relative', marginBottom: '50px', minHeight: '150px' }} >
                <div className='selected-product' ref={ref} style={{position: 'absolute', width: '100%', minHeight: '200px'}} >
                    <div className="name">
                        <div><b>Product: </b><br/>{props.name}</div>
                    </div>
                    <div className="desc">{props.description}</div>
                </div>
                <HiddenProduct ref={props.hiddenRef} name={props.prevProduct.name} description={props.prevProduct.description} />
            </div>
  	);
})

export default SelectedProduct;
