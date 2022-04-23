import { getFilteredItems, addUpvoteToFeedback } from '../utils/products';

export const GET_FILTERED_FEEDBACKS = 'GET_FILTERED_FEEDBACKS';
export const SET_FILTER_FOR_FEEDBACKS = 'SET_FILTER_FOR_FEEDBACKS';
export const SET_ACTIVE_FEEDBACKS = 'SET_ACTIVE_FEEDBACKS';
export const ADD_UPVOTE = 'ADD_UPVOTE';

export const getFilteredFeedbacks = (productId, activeType, filter) => {
	return dispatch => {
		dispatch({
			type: GET_FILTERED_FEEDBACKS,
			payload: getFilteredItems(productId, activeType, filter)
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

export const addUpvote = (name, id) => {
	return dispatch => {
        dispatch({
            type: ADD_UPVOTE,
            payload: addUpvoteToFeedback(name, id)
        });
	}
}