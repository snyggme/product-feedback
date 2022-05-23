import { 
	cachedProducts,
	httpGetProducts, 
	httpPostProductFeedback
} from '../utils/network';

export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAIL = 'GET_PRODUCTS_FAIL';

export const POST_FEEDBACK_TO_PRODUCT_REQUEST = 'POST_FEEDBACK_TO_PRODUCT_REQUEST';
export const POST_FEEDBACK_TO_PRODUCT_SUCCESS = 'POST_FEEDBACK_TO_PRODUCT_SUCCESS';
export const POST_FEEDBACK_TO_PRODUCT_FAIL = 'POST_FEEDBACK_TO_PRODUCT_FAIL';

export const GET_FILTERED_FEEDBACKS = 'GET_FILTERED_FEEDBACKS';
export const SET_FILTER_FOR_FEEDBACKS = 'SET_FILTER_FOR_FEEDBACKS';
export const SET_ACTIVE_FEEDBACKS = 'SET_ACTIVE_FEEDBACKS';

export const catchProducts = () => {
	return dispatch => {
		if (!cachedProducts) {	
			dispatch({
				type: GET_PRODUCTS_REQUEST
			});

			httpGetProducts(dispatch);
		} 
	}
}

export const addFeedback = (feedback, productId) => {
	return (dispatch, getState) => {
		dispatch({
			type: POST_FEEDBACK_TO_PRODUCT_REQUEST
		});

		return httpPostProductFeedback(dispatch, getState, feedback, productId)
	}
}