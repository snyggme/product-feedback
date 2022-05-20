import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function CarouselArrow({ direction, handleClick }) {
    const icon = direction === 'left' ? faArrowLeft : faArrowRight;

    return (
        <div className={`carousel-arrow-${direction}`}>
            <FontAwesomeIcon icon={icon} onClick={handleClick(direction)} />
        </div>
    )
}

export default CarouselArrow;