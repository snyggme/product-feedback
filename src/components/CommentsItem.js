// import { useState, useEffect } from 'react';

function CommentsItem({ username, text, width }) {
  	return (
        <div style={{borderBottom: '2px solid black'}}>
            <div className='feedback-comments-all-msgs-item' style={{width: `${width}%`, marginLeft: 'auto'}}>
                <img alt='profile' src={`https://robohash.org/${username}`} className='profile-img' />
                <div className='message-container'>
                    <div className='user-info'>
                        <div className='username'>{username}</div>
                        <div className='replay'>Replay</div>
                    </div>
                    <div className='message-text'>{text}</div>
                </div>
            </div>
        </div>
  	);
}

export default CommentsItem;