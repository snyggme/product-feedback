import { connect } from 'react-redux';
import LikedProduct from './LikedProduct';
import { deleteLike } from '../actions/LikeAction';

function Profile({ liked, username, deleteLike }) {
    return (
        <div>
            <div>Hello, {username}</div>
            Liked products:  
            { liked.map(item => <LikedProduct productId={item} deleteLike={deleteLike} />) }
        </div>
    );
}

const mapStateToProps = store => {
    return {
        username: store.auth.user.name,
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