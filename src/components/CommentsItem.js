// import { useState } from 'react';
import AddReplayComment from "./AddReplayComment";

function CommentsItem({ username, text, width, handleReplay, index, showReplay, setReplayKey }) {

    const handleClick = (e) => {
        handleReplay(username, width, index)
    }
    
  	return (
        <div style={{width: `${width}%`, marginLeft: 'auto', borderBottom: '2px solid black'}}>
            <div className='feedback-comments-all-msgs-item' >
                <img alt='profile' src={`https://robohash.org/${username}`} className='profile-img' />
                <div className='message-container'>
                    <div className='user-info'>
                        <div className='username'>{username}</div>
                        <div className='replay' onClick={handleClick}>Replay</div>
                    </div>
                    <div className='message-text'>{text}</div>
                </div>   
            </div>
            { showReplay && <AddReplayComment username={username} setReplayKey={setReplayKey} /> }
        </div>
  	);
}

export default CommentsItem;