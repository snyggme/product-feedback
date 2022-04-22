import {
    POST_COMMENT,
    GET_COMMENTS,
    SET_REPLAY_KEY
} from '../actions/CommentAction';
import { flatComments } from '../utils/products';

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
                items: action.payload,
                flatten: flatComments(action.payload)
			}
        case GET_COMMENTS:
            const { comments, feedback, flatten } = action.payload;

            return {
                ...state,
                items: comments,
                flatten,
                feedback
            }
        case SET_REPLAY_KEY:
            return {
                ...state,
                replayKey: action.payload
            }
 		default:
			return state;
	}
}