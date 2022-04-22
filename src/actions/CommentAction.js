import { getProduct, flatComments } from '../utils/products';

export const GET_COMMENTS = 'GET_COMMENTS';
export const POST_COMMENT = 'POST_COMMENT';

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

export const postComment = (comment) => {
	return dispatch => {
        dispatch({
            type: POST_COMMENT,
            payload: comment
        });
	}
}
