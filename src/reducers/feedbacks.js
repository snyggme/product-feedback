import {
	GET_FILTERED_FEEDBACKS,
	SET_FILTER_FOR_FEEDBACKS,
	SET_ACTIVE_FEEDBACKS
} from '../actions/FeedbackAction';

const initialState = {
    items: [],
    active: 'all',
    filter: 'Most Upvotes'
};

export const feedbacksReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_FILTER_FOR_FEEDBACKS: 
		return {
			...state,
            filter: action.payload,
		}
		case SET_ACTIVE_FEEDBACKS: 
			return {
				...state,
                active: action.payload,
			}
		case GET_FILTERED_FEEDBACKS: 
			return {
                ...state,
                items: [...action.payload],
			}
 		default:
			return state;
	}
}