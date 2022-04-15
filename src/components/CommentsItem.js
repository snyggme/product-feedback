// import { useState, useEffect } from 'react';

function CommentsItem({ username, text, childs, width }) {
    console.log(width)
  	return (
        <div style={{borderBottom: '2px solid black'}}>
            {/* <div className='feedback-comments-all-msgs-item'>
                <img alt='profile' src={`https://robohash.org/${username}`} className='profile-img' />
                <div className='message-container'>
                    <div className='user-info'>
                        <div className='username'>{username}</div>
                        <div className='replay'>Replay</div>
                    </div>
                    <div className='message-text'>{text}</div>
                </div>
            </div>
            { childs.map(({ username, text }, i) => 
                    <div key={i} className='feedback-comments-all-msgs-item' style={{width: '87%', marginLeft: 'auto'}}>
                        <img alt='profile' src={`https://robohash.org/${username}`} className='profile-img' />
                        <div className='message-container'>
                            <div className='user-info'>
                                <div className='username'>{username}</div>
                                <div className='replay'>Replay</div>
                            </div>
                            <div className='message-text'>{text}</div>
                        </div>
                    </div>
                )
            } */}
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