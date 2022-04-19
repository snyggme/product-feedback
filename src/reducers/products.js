import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL,
    POST_PRODUCT_REQUEST,
    POST_PRODUCT_SUCCESS,
    POST_PRODUCT_FAIL,
	PUT_PRODUCT_REQUEST,
    PUT_PRODUCT_SUCCESS,
    PUT_PRODUCT_FAIL,
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
		case PUT_PRODUCT_REQUEST:
			return {
				...state,
				error: null,
				isLoading: true
			}
		case PUT_PRODUCT_SUCCESS:
			const { _id } = action.payload;

			const i = state.feeds.findIndex(feed => feed._id === _id)

			return {
				error: null,
				isLoading: false,
				items: [
					...state.items.slice(0, i),
					action.payload, 
					...state.items.slice(i + 1)
				]
			}
		case PUT_PRODUCT_FAIL:
			return {
				...state,
				isLoading: false,
				error: {
					msg: action.payload
				}
			}
		case POST_PRODUCT_REQUEST:
			return {
				...state,
				error: null,
				isLoading: true
			}
		case POST_PRODUCT_SUCCESS:
			return {
				error: null,
				isLoading: false,
				items: [
					...state.items,
					action.payload
				]
			}
		case POST_PRODUCT_FAIL:
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