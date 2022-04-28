import {
    LOGOUT,
    POST_USER_REQUEST,
    POST_USER_SUCCESS,
    POST_USER_FAIL,
    SIGNIN_USER_REQUEST,
    SIGNIN_USER_SUCCESS,
    SIGNIN_USER_FAIL
} from '../actions/AuthAction';
import auth from '../utils/auth';

const initialState = {
	username: '',
	isSigning: false,
	// isSigned: auth.isSigned(),
	isSigned: false,
	error: null
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGOUT:
			return {
				error: null,
				isSigning: false,
				isSigned: false
			}
		case POST_USER_REQUEST:
			return {
				...state,
				isSigning: true
			}
		case POST_USER_SUCCESS:
			// auth.signup({
			// 	token: action.payload.token,
			// 	username: action.payload.username
			// });
			
			return {
				...state,
				isSigned: true,
				isSigning: false,
				username: action.payload.name
			};
		case POST_USER_FAIL:
			return {
				...state,
				isSigning: false,
				error: {
					msg: action.payload
				}
			}
		case SIGNIN_USER_REQUEST:
			return {
				...state,
				isSigning: true
			}
		case SIGNIN_USER_SUCCESS:
			// auth.signin({
			// 	token: action.payload.token,
			// 	username: action.payload.username
			// });
			
			return {
				...state,
				isSigned: true,
				isSigning: false,
				username: action.payload.name
			};
		case SIGNIN_USER_FAIL:
			return {
				...state,
				isSigning: false,
				error: {
					msg: action.payload
				}
			}
 		default:
			return state;
	}
}