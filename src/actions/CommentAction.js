import { getProduct, flatComments, addComment, addFeedbackComment } from '../utils/products';

export const GET_COMMENTS = 'GET_COMMENTS';
export const POST_COMMENT = 'POST_COMMENT';
export const SET_REPLAY_KEY = 'SET_REPLAY_KEY';

export const getComments = (products, productId, commentsId) => {
	return dispatch => {
        const product = getProduct(products, productId);
        const feedback = product.feedbacks.find(item => item.id === Number(commentsId));
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

export const postComment = (comments, comment, username, messageId) => {
	return dispatch => {
        dispatch({
            type: POST_COMMENT,
            payload: addComment(comments, comment, username, messageId)
        });


	}
}
