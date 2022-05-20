import SelectedProduct from './SelectedProduct';
import PanelForm from '../PanelForm/PanelForm';
import CarouselArrow from './CarouselArrow';

import { useLocation } from 'react-router-dom';
import { getProduct } from '../../utils/products';
import { connect } from 'react-redux';
import { useRef, useState } from 'react';

function AddFeedbackPanel({ products }) {
    let location = useLocation();

    const [ state, setState ] = useState(() => {
        const { name, description } = getProduct(products, location.state.from);
        const index = products.findIndex(product => product.name === name)
        const prevProduct = { name, description };
        
        return { name, description, index, prevProduct }
    })

    const selpr = useRef(null);
    const hidden = useRef(null);

    const handleClick = (arrow) => () => {
        if (selpr.current.style.animation.length > 0)
            return

        if (arrow === 'right') {
            selpr.current.style.animation = 'fromleft 600ms linear';
            hidden.current.style.animation = 'appear-to-right 600ms linear';
        } else {
            selpr.current.style.animation = 'fromright 600ms linear'
            hidden.current.style.animation = 'appear-to-left 600ms linear';
        }
        
        setTimeout(() => {
            selpr.current.style.animation = '';
            hidden.current.style.animation = '';
        }, 600)

        const prevProduct = {
            name: state.name,
            description: state.description
        }
        let index;

        if (arrow === 'right') {
            if (state.index + 1 > products.length - 1) {
                index = 0;
            } else {
                index = state.index + 1;
            }
        } else {
            if (state.index - 1 < 0) {
                index = products.length - 1;
            } else  {
                index = state.index - 1;
            }
        }

        const { name, description } = products[index];

        setState({ name, description, index, prevProduct })
    }

  	return (
        <div className='add-feedback-panel'>
            <CarouselArrow direction='left' handleClick={handleClick} />
            <SelectedProduct 
                ref={selpr} 
                hiddenRef={hidden}
                name={state.name} 
                description={state.description} 
                prevProduct={state.prevProduct} 
            />
            <CarouselArrow direction='right' handleClick={handleClick} />
            <PanelForm productId={state.name} />
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
)(AddFeedbackPanel);
