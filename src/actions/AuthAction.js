import auth, { addUser, getUser } from '../utils/auth';
import { getBackendToken } from '../utils/network';
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
	// return async dispatch => {
	// 	dispatch({
	// 		type: POST_USER_REQUEST
	// 	})

	// 	await getBackendToken(
	// 		dispatch, 
	// 		user, 
	// 		'/users', 
	// 		POST_USER_SUCCESS,
	// 		POST_USER_FAIL
	// 	)
	// }
	return dispatch => {
		dispatch({
			type: POST_USER_REQUEST
		})

		try {
			addUser(user);

			dispatch({
				type: POST_USER_SUCCESS,
				payload: user
			})
		} catch (e) {
			dispatch({
				type: POST_USER_FAIL,
				payload: new Error(e).message
			})
		}
	}
}

export const signinUser = (user) => {
	// return async dispatch => {
	// 	dispatch({
	// 		type: SIGNIN_USER_REQUEST
	// 	})

	// 	await getBackendToken(
	// 		dispatch, 
	// 		user, 
	// 		'/auth',
	// 		SIGNIN_USER_SUCCESS,
	// 		SIGNIN_USER_FAIL
	// 	)
	// }
	return dispatch => {
		dispatch({
			type: SIGNIN_USER_REQUEST
		})

		try {
			if (getUser(user)) {
				dispatch({
					type: SIGNIN_USER_SUCCESS,
					payload: user
				})
			} else {
				throw new Error('User is not found');
			}
		} catch (e) {
			dispatch({
				type: SIGNIN_USER_FAIL,
				payload: new Error(e).message
			})
		}
	}
}