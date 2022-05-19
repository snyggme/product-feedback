export const ADD_PRODUCT_LIKE = 'ADD_PRODUCT_LIKE';
export const ADD_PRODUCT_LIKE_FAIL = 'ADD_PRODUCT_LIKE_FAIL';
export const DELETE_PRODUCT_LIKE = 'DELETE_PRODUCT_LIKE';
export const CLEAR_TOOLTIP = 'CLEAR_TOOLTIP';
export const CLEAR_LIKES = 'CLEAR_LIKES';

export const addLike = (productId) => {
	return (dispatch, getState) => {
        const isAdded = getState().likes.liked.findIndex(item => item === productId);
        const { tooltip } = getState().likes;

        if (!tooltip) {
            if (isAdded === -1) {
                dispatch({
                    type: ADD_PRODUCT_LIKE,
                    payload: {
                        like: productId,
                        message: {
                            likedProductId: productId,
                            text: 'Like added!'
                        } 
                    }
                });
            } else {
                dispatch({
                    type: ADD_PRODUCT_LIKE_FAIL,
                    payload: {
                        likedProductId: productId,
                        text: 'Like already exists. See profile.'
                    }
                });
            }
        }
	} 
}

export const deleteLike = (productId) => {
    return (dispatch, getState) => {
		const index = getState().likes.liked.findIndex(item => item === productId);;

        dispatch({
            type: DELETE_PRODUCT_LIKE,
            payload: index
        });
    }
}

let timerOn = false;

export const clearTooltip = () => {
	return dispatch => {
        if (!timerOn) {
            timerOn = true;

            setTimeout(() => {
                timerOn = false;
                
                dispatch({
                    type: CLEAR_TOOLTIP
                });
            }, 1200);
            
        }
	}
}