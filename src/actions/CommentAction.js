import { flatComments, addComment } from '../utils/products';

export const GET_COMMENTS = 'GET_COMMENTS';
export const POST_COMMENT = 'POST_COMMENT';
export const SET_REPLAY_KEY = 'SET_REPLAY_KEY';

export const getComments = (feedbackId) => {
	return (dispatch, getState) => {
        const { feedbacks: { items } } = getState()
        const feedback = items.find(item => item.id === Number(feedbackId));
        const flatten = flatComments(feedback.comments);

        dispatch({
            type: GET_COMMENTS,
            payload: {
                comments: feedback.comments,
                flatten,
                feedback,
            }
        });
	}
}

export const setReplayKey = (key) => {
    return dispatch => {
        dispatch({
            type: SET_REPLAY_KEY, 
            payload: key
        });
	}
}

export const postComment = (comment, username, messageId) => {
	return (dispatch, getState) => {
        const { comments: { items } } = getState()
        const newComments = addComment(items, comment, username, messageId);
        const flatten = flatComments(newComments);

        dispatch({
            type: POST_COMMENT,
            payload: {
                comments: newComments,
                flatten
            }
        });
	}
}
