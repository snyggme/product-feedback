import { getProducts, getFilteredItems } from '../utils/products';

export const GET_FILTERED_FEEDBACKS = 'GET_FILTERED_FEEDBACKS';
export const SET_FILTER_FOR_FEEDBACKS = 'SET_FILTER_FOR_FEEDBACKS';
export const SET_ACTIVE_FEEDBACKS = 'SET_ACTIVE_FEEDBACKS';

export const getFilteredFeedbacks = (products, productId, activeType, filter) => {
	return dispatch => {
		dispatch({
			type: GET_FILTERED_FEEDBACKS,
			payload: getFilteredItems(products, productId, activeType, filter)
		})
	}
}

export const setFeedbacksFilter = (filter) => {
	return dispatch => {
		dispatch({
			type: SET_FILTER_FOR_FEEDBACKS,
			payload: filter
		})
	}
}

export const setActiveFeedbacks = (activeType) => {
	return dispatch => {
		dispatch({
			type: SET_ACTIVE_FEEDBACKS,
			payload: activeType
		})
	}
}