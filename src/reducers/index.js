import { authReducer } from './auth';
import { combineReducers } from 'redux';
import { productsReducer } from './products';

export const rootReducer = combineReducers({
    auth: authReducer,
    products: productsReducer
})
