import SelectedProduct from './SelectedProduct';
import PanelForm from '../PanelForm/PanelForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import { getProduct } from '../../utils/products';
import { connect } from 'react-redux';
import { useRef, useState } from 'react';

function AddFeedbackPanel({ products }) {
    let location = useLocation();

    const [ state, setState ] = useState(() => {
        const { name, description } = getProduct(products, location.state.from);
        const index = products.findIndex(product => product.name === name)

        return { name, description, index }
    })

    const selpr = useRef(null);

    const handleClick = (arrow) => () => {
        if (selpr.current.style.animation.length > 0)
            return

        if (arrow === 'right') {
            selpr.current.style.animation = 'fromleft 350ms linear';
        } else {
            selpr.current.style.animation = 'fromright 350ms linear'
        }
        
        setTimeout(() => {
            selpr.current.style.animation = ''
        }, 350)

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

        setState({ name, description, index })
    }

  	return (
        <div className='add-feedback-panel'>
            <div className='carousel-arrow-left'>
                <FontAwesomeIcon icon={faArrowLeft} onClick={handleClick('left')} />
            </div>
            <SelectedProduct ref={selpr} name={state.name} description={state.description} />
            <div className='carousel-arrow-right'>
                <FontAwesomeIcon icon={faArrowRight} onClick={handleClick('right')} />
            </div>
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