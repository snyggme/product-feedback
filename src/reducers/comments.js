import {
    POST_COMMENT,
    GET_COMMENTS
} from '../actions/CommentAction';

const initialState = {
    feedback: {},
	items: [],
    flatten: [],
    replayKey: -1
};

export const commentsReducer = (state = initialState, action) => {
	switch (action.type) {
		case POST_COMMENT:
			return {
				...state,

			}
        case GET_COMMENTS:
            const { comments, feedback, flatten } = action.payload;

            return {
                ...state,
                items: comments,
                flatten,
                feedback
            }
 		default:
			return state;
	}
}