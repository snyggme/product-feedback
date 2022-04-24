import { 
	getFilteredItems, 
	addUpvoteToFeedback, 
	getProducts 
} from '../utils/products';

export const GET_FEEDBACKS_REQUEST = 'GET_FEEDBACKS_REQUEST';
export const GET_FEEDBACKS_SUCCESS = 'GET_FEEDBACKS_SUCCESS';
export const GET_FEEDBACKS_FAIL = 'GET_FEEDBACKS_FAIL';

export const GET_FILTERED_FEEDBACKS = 'GET_FILTERED_FEEDBACKS';
export const SET_FILTER_FOR_FEEDBACKS = 'SET_FILTER_FOR_FEEDBACKS';
export const SET_ACTIVE_FEEDBACKS = 'SET_ACTIVE_FEEDBACKS';

export const ADD_UPVOTE = 'ADD_UPVOTE';

export const getFeedbacks = (productId) => {
	return dispatch => {
		dispatch({
			type: GET_FEEDBACKS_REQUEST
		});

		try {
			dispatch({
				type: GET_FEEDBACKS_SUCCESS,
				payload: getProducts(productId).feedbacks
			})
		} catch (e) {
			dispatch({
				type: GET_FEEDBACKS_FAIL,
				payload: new Error(e).message
			})
		}
	}
}

export const getFilteredFeedbacks = (activeType, filter) => {
	return (dispatch, getState) => {
		const { feedbacks: { items } } = getState();
		dispatch({
			type: GET_FILTERED_FEEDBACKS,
			payload: getFilteredItems(activeType, filter, items)
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

export const addUpvote = (feedbackId) => {
	return (dispatch, getState) => {
		const { feedbacks: { items, filtered } } = getState();
        dispatch({
            type: ADD_UPVOTE, 
			payload: {
				items: addUpvoteToFeedback(feedbackId, items),
				filtered: addUpvoteToFeedback(feedbackId, filtered)
			}
        });
	}
}