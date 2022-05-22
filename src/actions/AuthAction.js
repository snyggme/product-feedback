import { getUser } from '../utils/network';
import { CLEAR_LIKES } from './LikeAction';

export const LOGOUT = 'LOGOUT';

export const POST_USER_REQUEST = 'POST_USER_REQUEST';
export const POST_USER_SUCCESS = 'POST_USER_SUCCESS';
export const POST_USER_FAIL = 'POST_USER_FAIL';

export const SIGNIN_USER_REQUEST = 'SIGNIN_USER_REQUEST';
export const SIGNIN_USER_SUCCESS = 'SIGNIN_USER_SUCCESS';
export const SIGNIN_USER_FAIL = 'SIGNIN_USER_FAIL';

export const logout = () => {
	// return dispatch => {
	// 	auth.signout()

	// 	dispatch({
	// 		type: LOGOUT
	// 	});
	// } 
	return dispatch => {
		dispatch({
			type: CLEAR_LIKES
		});

		dispatch({
			type: LOGOUT
		});
	} 
}

export const createUser = (user) => {
	return async dispatch => {
		dispatch({
			type: POST_USER_REQUEST
		})

		await getUser(
			dispatch,
			user,
			'/register',
			POST_USER_SUCCESS,
			POST_USER_FAIL
		)
	}
}

export const signinUser = (user) => {
	return async dispatch => {
		dispatch({
			type: SIGNIN_USER_REQUEST
		})

		await getUser(
			dispatch,
			user,
			'/signin',
			SIGNIN_USER_SUCCESS,
			SIGNIN_USER_FAIL
		)
	}
}