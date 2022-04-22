// import { useState } from 'react';
import AddReplayComment from "./AddReplayComment";

function CommentsItem({ id, username, text, width, index, showReplay, setReplayKey }) {
  	return (
        <div style={{width: `${width}%`, marginLeft: 'auto', borderBottom: '2px solid black'}}>
            <div className='feedback-comments-all-msgs-item' >
                <img alt='profile' src={`https://robohash.org/${username}`} className='profile-img' />
                <div className='message-container'>
                    <div className='user-info'>
                        <div className='username'>{username}</div>
                        <div className='replay' onClick={() => setReplayKey(index)}>Replay</div>
                    </div>
                    <div className='message-text'>{text}</div>
                </div>   
            </div>
            { showReplay && <AddReplayComment username={username} id={id} /> }
        </div>
  	);
}

export default CommentsItem;
