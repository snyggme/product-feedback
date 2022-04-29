import {
	GET_FILTERED_FEEDBACKS,
	SET_FILTER_FOR_FEEDBACKS,
	SET_ACTIVE_FEEDBACKS,
	ADD_UPVOTE,
	GET_FEEDBACKS_REQUEST,
	GET_FEEDBACKS_SUCCESS,
	GET_FEEDBACKS_FAIL
} from '../actions/FeedbackAction';

const initialState = {
    items: [],
	filtered: [],
    active: 'all',
    filter: 'Most Upvotes',
	isLoading: true,
	error: null
};

export const feedbacksReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_FEEDBACKS_REQUEST:
			return {
				...state,
				isLoading: true
			}
		case GET_FEEDBACKS_SUCCESS:
			return {
				...state,
				items: JSON.parse(JSON.stringify(action.payload)),
				filtered: JSON.parse(JSON.stringify(action.payload)),
				isLoading: false,
				error: null
			}
		case GET_FEEDBACKS_FAIL:
			return {
				...state,
				isLoading: false,
				error: {
					msg: action.payload
				}
			}
		case SET_FILTER_FOR_FEEDBACKS: 
			return {
				...state,
				filter: action.payload.filter,
				filtered: JSON.parse(JSON.stringify(action.payload.filtered))
			}
		case SET_ACTIVE_FEEDBACKS: 
			return {
				...state,
				active: action.payload.active,
				filtered: JSON.parse(JSON.stringify(action.payload.filtered))
			}
		case GET_FILTERED_FEEDBACKS: 
			return {
                ...state,
				filtered: JSON.parse(JSON.stringify(action.payload))
			}
		case ADD_UPVOTE: 
			return {
                ...state,
				items: JSON.parse(JSON.stringify(action.payload.items)),
				filtered: JSON.parse(JSON.stringify(action.payload.filtered))
			}
 		default:
			return state;
	}
}