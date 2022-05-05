export const ADD_PRODUCT_LIKE = 'ADD_PRODUCT_LIKE';
export const ADD_PRODUCT_LIKE_FAIL = 'ADD_PRODUCT_LIKE_FAIL';
export const DELETE_PRODUCT_LIKE = 'DELETE_PRODUCT_LIKE';
export const CLEAR_TOOLTIP = 'CLEAR_TOOLTIP';

export const addLike = (productId) => {
	return (dispatch, getState) => {
        const isAdded = getState().likes.liked.findIndex(item => item === productId);
        
        if (isAdded === -1) {
            dispatch({
                type: ADD_PRODUCT_LIKE,
                payload: {
                    like: productId,
                    message: {
                        productId,
                        text: 'Like added!'
                    } 
                }
            });
        } else {
            dispatch({
                type: ADD_PRODUCT_LIKE_FAIL,
                payload: {
                    productId,
                    text: 'Like already exists. See profile.'
                }
            });
        }
	} 
}

export const deleteLike = (productId) => {
    return dispatch => {

    }
}