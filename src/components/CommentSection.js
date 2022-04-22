import { useState, useEffect } from 'react';
import CommentsItem from "./CommentsItem";

function CommentSection({ flattenComments }) {
    const [replayKey, setReplayKey] = useState(-1);

    const handleReplay = (username, width, key) => {
        let index = 0;

        flattenComments.forEach((comment, i) => {
            if (comment.width === width - 13) index = i;
        });
        
        setReplayKey(key);
    }
    
    return (
        <div className='feedback-comments-all-msgs'>
            {flattenComments.map((comment, i) => 
                <CommentsItem 
                    key={i} 
                    {...comment} 
                    handleReplay={handleReplay} 
                    showReplay={replayKey === i} 
                    index={i}
                    setReplayKey={setReplayKey} />
            )}
        </div>
    )
}

export default CommentSection;