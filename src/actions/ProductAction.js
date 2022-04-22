import { 
	httpGetFeeds, 
	httpPostFeed, 
	httpPutFeed, 
	httpDeleteFeed,
	cachedFeeds 
} from '../utils/network';
import { getProducts } from '../utils/products';

export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAIL = 'GET_PRODUCTS_FAIL';

export const POST_PRODUCT_REQUEST = 'POST_PRODUCT_REQUEST';
export const POST_PRODUCT_SUCCESS = 'POST_PRODUCT_SUCCESS';
export const POST_PRODUCT_FAIL = 'POST_PRODUCT_FAIL';

export const PUT_PRODUCT_REQUEST = 'PUT_PRODUCT_REQUEST';
export const PUT_PRODUCT_SUCCESS = 'PUT_PRODUCT_SUCCESS';
export const PUT_PRODUCT_FAIL = 'PUT_PRODUCT_FAIL';

export const GET_FILTERED_FEEDBACKS = 'GET_FILTERED_FEEDBACKS';
export const SET_FILTER_FOR_FEEDBACKS = 'SET_FILTER_FOR_FEEDBACKS';
export const SET_ACTIVE_FEEDBACKS = 'SET_ACTIVE_FEEDBACKS';

export const catchProducts = () => {
	return dispatch => {
		if (!cachedFeeds) {	
			dispatch({
				type: GET_PRODUCTS_REQUEST
			});

			try {
				dispatch({
					type: GET_PRODUCTS_SUCCESS,
					payload: getProducts()
				})
			} catch (e) {
				dispatch({
					type: GET_PRODUCTS_FAIL,
					payload: new Error(e).message
				})
			}
		} 
	}
}

// export const createFeed = (feed) => {
// 	return async dispatch => {
// 		dispatch({
// 			type: POST_FEED_REQUEST
// 		});

// 		return await httpPostFeed(dispatch, feed);
// 	}
// }

// export const updateFeed = (feed, id) => {
// 	return async dispatch => {
// 		dispatch({
// 			type: PUT_FEED_REQUEST
// 		});

// 		await httpPutFeed(dispatch, feed, id);
// 	}
// }

// export const deleteFeed = (id) => {
// 	return dispatch => {
// 		dispatch({
// 			type: DELETE_FEED_REQUEST
// 		});

// 		httpDeleteFeed(dispatch, id);
// 	}
// }