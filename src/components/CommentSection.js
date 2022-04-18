import { useState, useEffect } from 'react';
import CommentsItem from "./CommentsItem";

function CommentSection({ comments }) {
    const [flattenComments, setFlattenComments] = useState([]);
    const [replayKey, setReplayKey] = useState(-1);

    useEffect(() => {
        const flatComments = (c) => {
            let arr = [];
    
            const setWidth = ({ username, text, childs }, width) => {
                if (width < 35) width = 35;
    
                arr.push({ username, text, width });
        
                if (childs.length > 0) childs.map(child => setWidth(child, width - 13))
            }
    
            c.map(comment => setWidth(comment, 100))
    
            return arr;
        }

        setFlattenComments(flatComments(comments))
    }, [comments])

    const handleReplay = (username, width, key) => {
        let index = 0;

        flattenComments.forEach((comment, i) => {
            if (comment.width === width - 13) index = i;
        });
        setReplayKey(key);
        console.log('index', index)
        console.log(flattenComments)
        console.log('username', username)
        console.log('width', width)
    }
    
    return (
        <div className='feedback-comments-all-msgs'>
            {flattenComments.map((comment, i) => 
                <CommentsItem 
                    key={i} 
                    {...comment} 
                    handleReplay={handleReplay} 
                    showReplay={replayKey === i} 
                    index={i}/>
            )}
        </div>
    )
}

export default CommentSection;