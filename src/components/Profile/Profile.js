import { connect } from 'react-redux';
import LikedProduct from './LikedProduct';
import { deleteLike } from '../../actions/LikeAction';

function Profile({ liked, deleteLike, user: { name, email, city } }) {
    return (
        <div className='profile-container'>
            <img alt='profile' src={`https://robohash.org/${name}?set=set2`} className='user-img' />
            <div className='user-name'><b>Username:</b> {name}</div>
            <div><b>City:</b> {city}</div>
            <div><b>Email:</b> {email}</div>
            <div>
                <b>Liked products [{liked.length}]:</b>  
                { liked.map((likedProduct, i) => <LikedProduct productId={likedProduct} deleteLike={deleteLike} key={i} />) }
            </div>
        </div>
    );
}

const mapStateToProps = store => {
    return {
        user: store.auth.user,
        liked: store.likes.liked
    }
}


const mapDispatchToProps = dispatch => {
    return {
        deleteLike: (productId) => dispatch(deleteLike(productId))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);