import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { productsReducer } from './products';
import { feedbacksReducer } from './feedbacks';
import { commentsReducer } from './comments';
import { userReducer } from './user';
import { likesReducer } from "./likes";

export const rootReducer = combineReducers({
    auth: authReducer,
    products: productsReducer,
    feedbacks: feedbacksReducer,
    comments: commentsReducer,
    likes: likesReducer
})
