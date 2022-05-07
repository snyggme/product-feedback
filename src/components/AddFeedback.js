import SelectedProduct from './SelectedProduct';
import PanelForm from './PanelForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import { getProduct } from '../utils/products';
import { connect } from 'react-redux';
import { useState } from 'react';

function AddFeedback({ products }) {
    let location = useLocation();

    const [ state, setState ] = useState(() => {
        const { name, description } = getProduct(products, location.state.from);
        const index = products.findIndex(product => product.name === name)

        return { name, description, index }
    })

    const handleClick = (arrow) => () => {
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
            <SelectedProduct name={state.name} description={state.description} />
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
)(AddFeedback);
