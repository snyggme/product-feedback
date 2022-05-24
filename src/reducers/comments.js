import {
    POST_COMMENT_SUCCESS,
    POST_COMMENT_FAIL,
    GET_COMMENTS,
    SET_REPLAY_KEY
} from '../actions/CommentAction';

const initialState = {
    feedback: {},
	items: [],
    flatten: [],
    replayKey: -1,
    error: null
};

export const commentsReducer = (state = initialState, action) => {
	switch (action.type) {
        case POST_COMMENT_SUCCESS:
			return {
				...state,
                items: JSON.parse(JSON.stringify(action.payload.comments)),
                flatten: JSON.parse(JSON.stringify(action.payload.flatten))
			}
        case POST_COMMENT_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case GET_COMMENTS:
            const { comments, feedback, flatten } = action.payload;

            return {
                ...state,
                items: JSON.parse(JSON.stringify(comments)),
                flatten: JSON.parse(JSON.stringify(flatten)),
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