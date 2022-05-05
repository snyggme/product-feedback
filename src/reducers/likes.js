import {
    ADD_PRODUCT_LIKE,
    ADD_PRODUCT_LIKE_FAIL,
    DELETE_PRODUCT_LIKE,
    CLEAR_TOOLTIP
} from '../actions/LikeAction';

const initialState = {
	liked: [],
	message: { 
		text: '',
		productId: null
	},
	tooltip: false
};

export const likesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PRODUCT_LIKE:
			return {
                liked: [
                    ...state.liked,
                    action.payload.like
                ],
                message: {
                    text: action.payload.message.text,
                    productId: action.payload.message.productId
                },
                tooltip: true
			};
        case ADD_PRODUCT_LIKE_FAIL:
            return {
                ...state,
                message: {
                    text: action.payload.text,
                    productId: action.payload.productId
                },
                tooltip: true
            };
		case DELETE_PRODUCT_LIKE:
            const i = action.payload;
			return {
				...state,
				liked: [
					...state.liked.slice(0, i),
					...state.liked.slice(i + 1)
				]
			}
        case CLEAR_TOOLTIP:
            return {
                ...state,
                message: {
                    text: '',
                    productId: null
                },
                tooltip: false
            }
 		default:
			return state;
	}
}