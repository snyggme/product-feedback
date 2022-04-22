import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { productsReducer } from './products';
import { feedbacksReducer } from './feedbacks';
import { commentsReducer } from './comments';

export const rootReducer = combineReducers({
    auth: authReducer,
    products: productsReducer,
    feedbacks: feedbacksReducer,
    comments: commentsReducer
})
