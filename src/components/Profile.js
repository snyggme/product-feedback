import { connect } from 'react-redux';

function Profile(props) {
    return (
        <div>
            Hello, {props.username}
        </div>
    );
}

const mapStateToProps = store => {
    return {
        username: store.auth.username
    }
}

export default connect(
    mapStateToProps,
    null
)(Profile);