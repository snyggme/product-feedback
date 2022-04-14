// import { useState, useEffect } from 'react';

function CommentsItem({ username, text, childs }) {
  	return (
        <div className='feedback-comments-all-msgs-item'>
            <img alt='profile' src={`https://robohash.org/${username}`} className='profile-img' />
            <div className='message-container'>
                <div className='user-info'>
                    <div className='username'>{username}</div>
                    <div className='replay'>Replay</div>
                </div>
                <div className='message-text'>{text}</div>
            </div>
        </div>
  	);
}

export default CommentsItem;