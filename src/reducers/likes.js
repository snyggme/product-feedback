import {
    ADD_PRODUCT_LIKE,
    ADD_PRODUCT_LIKE_FAIL,
    DELETE_PRODUCT_LIKE,
    CLEAR_TOOLTIP,
    CLEAR_LIKES
} from '../actions/LikeAction';

const initialState = {
	liked: [],
	message: { 
		text: '',
		likedProductId: null
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
                    likedProductId: action.payload.message.likedProductId
                },
                tooltip: true
			};
        case ADD_PRODUCT_LIKE_FAIL:
            return {
                ...state,
                message: {
                    text: action.payload.text,
                    likedProductId: action.payload.likedProductId
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
                    likedProductId: null
                },
                tooltip: false
            }
        case CLEAR_LIKES: 
            return initialState
 		default:
			return state;
	}
}