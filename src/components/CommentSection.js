import CommentsItem from "./CommentsItem";

function CommentSection({ comments: { flatten, replayKey }, setReplayKey }) {
    return (
        <div className='feedback-comments-all-msgs'> 
            {flatten.map((comment, i) => 
                <CommentsItem 
                    key={i} 
                    {...comment} 
                    showReplay={replayKey === i} 
                    setReplayKey={setReplayKey}
                    index={i}
                />
            )}
        </div>
    )
}

export default CommentSection;