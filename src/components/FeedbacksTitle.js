import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeed } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function FeedbacksTitle({ titleNumber, setFilter, activeFilter }) {
    const [ showList, setShowList ] = useState(false);

    const handleMenuClick = () => {
        setShowList(!showList)
    }

    const handleMouseLeave = () => {
        setShowList(false)
    }

    const handleMenuElementClick = (e) => {
        e.stopPropagation();
        setShowList(false);
        setFilter(e.target.innerText);
    }

    return (
        <div className='feedbacks-items-title'>
            <FontAwesomeIcon icon={faFeed} size='xl'/>
            <span className='feedbacks-items-title-number'>
                {titleNumber} Feedbacks
            </span>
            <div className='feedbacks-items-title-sortby'>
                <span>Sort by : </span>
                <span className='sortby-list-arrow' onClick={handleMenuClick}>
                    {activeFilter} <i className="arrow-down"></i>
                    {showList
                    && <ul className='sortby-list' onMouseLeave={handleMouseLeave}>
                        <li onClick={handleMenuElementClick}>Most Upvotes</li>    
                        <li onClick={handleMenuElementClick}>Most Comments</li>    
                        <li onClick={handleMenuElementClick}>Least Upvotes</li> 
                        <li onClick={handleMenuElementClick}>Least Comments</li> 
                    </ul>}    
                </span>
            </div>  
            <button className='feedbacks-items-title-add-btn'>+ Add feedback</button>
        </div>
    )
}

export default FeedbacksTitle;