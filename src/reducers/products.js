import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL,
    POST_FEEDBACK_TO_PRODUCT_REQUEST,
    POST_FEEDBACK_TO_PRODUCT_SUCCESS,
    POST_FEEDBACK_TO_PRODUCT_FAIL,
} from '../actions/ProductAction';

const initialState = {
	items: [],
	isLoading: true,
	error: null
};

export const productsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_PRODUCTS_REQUEST:
			return {
				...state,
				isLoading: true
			}
		case GET_PRODUCTS_SUCCESS:
			return {
				...state,
				items: action.payload,
				isLoading: false,
				error: null
			}
		case GET_PRODUCTS_FAIL:
			return {
				...state,
				isLoading: false,
				error: {
					msg: action.payload
				}
			}
		case POST_FEEDBACK_TO_PRODUCT_REQUEST:
			return {
				...state,
				error: null,
				isLoading: true
			}
		case POST_FEEDBACK_TO_PRODUCT_SUCCESS:
			return {
				error: null,
				isLoading: false,
				items: JSON.parse(JSON.stringify(action.payload))
			}
		case POST_FEEDBACK_TO_PRODUCT_FAIL:
			return {
				...state,
				isLoading: false,
				error: {
					msg: action.payload
				}
			}		
 		default:
			return state;
	}
}