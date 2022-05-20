import { forwardRef } from "react";

const HiddenProduct = forwardRef((props, ref) => {
    const styles = {
        position: 'absolute',
        width: '100%', 
        minHeight: '200px',
        opacity: '0',
        zIndex: '-10'
    }
    return (
        <div className='selected-product' ref={ref} style={styles} >
            <div className="name">
                <div><b>Product: </b><br/>{props.name}</div>
            </div>
            <div className="desc">{props.description}</div>
        </div>
    )
})

export default HiddenProduct;