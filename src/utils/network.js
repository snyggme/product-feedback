import { 
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL,
    POST_FEEDBACK_TO_PRODUCT_SUCCESS,
    POST_FEEDBACK_TO_PRODUCT_FAIL
} from '../actions/ProductAction';
import { POST_COMMENT_SUCCESS, POST_COMMENT_FAIL } from '../actions/CommentAction';
import { 
    addUpvoteToFeedback, 
    addFeedbackToProduct,
    flatComments, 
    addComment
 } from '../utils/products';

export let cachedProducts = false;

const API_ROOT = 'http://localhost:3001';

// export const httpGetFeeds = async (dispatch) => {
//     try {
//         const response = await fetch(`${API_ROOT}/feeds`);

//         if (response.ok) {
//             const json = await response.json();

//             cachedFeeds = true;

//             dispatch({
//                 type: GET_FEEDS_SUCCESS,
//                 payload: json.feeds
//             })
//         } else {
//             throw new Error(response.status);
//         }
//     } catch (e) {
//         dispatch({
//             type: GET_FEEDS_FAIL,
//             payload: new Error(e).message
//         })
//     }
// }

// export const httpPostFeed = async (dispatch, feed) => {
//     try {
//         const response = await fetch(`${API_ROOT}/feeds`, {  
//             method: 'POST',
//             mode: 'cors',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'x-access-token': auth.getBackendToken()
//             },
//             body: JSON.stringify(feed)
//         });

//         if (response.ok) {
//             const json = await response.json();

//             dispatch({
//                 type: POST_FEED_SUCCESS,
//                 payload: json.feed
//             })
            
//             return json.feed._id
//         } else {
//             throw new Error(response.status);            
//         }
//     } catch (e) {
//         dispatch({
//             type: POST_FEED_FAIL,
//             payload: new Error(e).message
//         })
//     }
// }

// export const httpPutFeed = async (dispatch, feed, id) => {
//     try {
//         const response = await fetch(`${API_ROOT}/feeds/${id}`, {  
//             method: 'PUT',
//             mode: 'cors',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'x-access-token': auth.getBackendToken()
//             },
//             body: JSON.stringify(feed)
//         });

//         if (response.ok) {
//             const json = await response.json();

//             dispatch({
//                 type: PUT_FEED_SUCCESS,
//                 payload: json.feed
//             })
//         } else {
//             throw new Error(response.status);            
//         }
//     } catch (e) {
//         dispatch({
//             type: PUT_FEED_FAIL,
//             payload: new Error(e).message
//         })
//     }
// }

// export const httpDeleteFeed = async (dispatch, id) => {
//     try {
//         const response = await fetch(`${API_ROOT}/feeds/${id}`, {  
//             method: 'DELETE',
//             mode: 'cors',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'x-access-token': auth.getBackendToken()
//             }
//         });

//         if (response.ok) {
//             const json = await response.json();
            
//             dispatch({
//                 type: DELETE_FEED_SUCCESS,
//                 payload: json._id
//             })
//         } else {
//             throw new Error(response.status);            
//         }
//     } catch (e) {
//         dispatch({
//             type: DELETE_FEED_FAIL,
//             payload: new Error(e).message
//         })
//     }
// }

// export const getBackendToken = async (...args) => {  
//     const [ dispatch, body, endpoint, success, fail ] = args;
//     try {
//         const response = await fetch(`${API_ROOT}${endpoint}`, {  
//             method: 'POST',
//             mode: 'cors',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(body)
//         });

//         if (response.ok) {
//             const json = await response.json();

//             dispatch({
//                 type: success,
//                 payload: {
//                     token: json.token,
//                     username: body.username
//                 }
//             })
//         } else {
//             throw new Error(response.status);            
//         }
//     } catch (e) {
//         dispatch({
//             type: fail,
//             payload: new Error(e).message
//         })
//     }
// }

export const getUser = async (...args) => {
    const [ dispatch, body, endpoint, success, fail ] = args;

    try {
        const response = await fetch(`${API_ROOT}${endpoint}`, {  
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        if (response.ok) {
            const user = await response.json();

            dispatch({
                type: success,
                payload: user
            })
        } else {
            throw new Error(response.status);            
        }
    } catch (e) {
        dispatch({
            type: fail,
            payload: new Error(e).message
        })
    }
}

export const httpGetProducts = async (dispatch) => {
    try {
        const response = await fetch(`${API_ROOT}/products`);

        if (response.ok) {
            const products = await response.json();
        
            cachedProducts = true;

            dispatch({
                type: GET_PRODUCTS_SUCCESS,
                payload: products
            })
        } else {
            throw new Error(response.status);
        }
    } catch (e) {
        dispatch({
            type: GET_PRODUCTS_FAIL,
            payload: new Error(e).message
        })
    }
}

export const httpPutAddUpvotes = async (...args) => {
    const [ dispatch, getState, id, productId, success, fail ] = args;

    try {
        const response = await fetch(`${API_ROOT}/add-upvote/${id}`, {  
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ productId })
        });
        if (response.ok) {
            // const feedback = await response.json();
   
            const { feedbacks: { items, filtered } } = getState();

            dispatch({
                type: success, 
                payload: {
                    items: addUpvoteToFeedback(id, items),
                    filtered: addUpvoteToFeedback(id, filtered)
                }
            });
        } else {
            throw new Error(response.status);
        }
    } catch (e) {
        dispatch({
            type: fail,
            payload: new Error(e).message
        })
    }
}


export const httpPostProductFeedback = async (dispatch, getState, feedback, productId) => {
    try {
        const response = await fetch(`${API_ROOT}/add-feedback`, {  
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ feedback, productId })
        });

        if (response.ok) {
            const json = await response.json();

            const { products: { items } } = getState();
            
            dispatch({
                type: POST_FEEDBACK_TO_PRODUCT_SUCCESS,
                // leave it like that until data are received not from server
                // should not add feedback on front side
                payload: addFeedbackToProduct(items, feedback, productId)
            })

            return json.id
        } else {
            throw new Error(response.status);            
        }
    } catch (e) {
        dispatch({
            type: POST_FEEDBACK_TO_PRODUCT_FAIL,
            payload: new Error(e).message
        })
    }
}

export const httpPostAddComment = async (...args) => {
    const [ dispatch, getState, comment, user, messageId, feedbackId, productId ] = args;

    try {
        const response = await fetch(`${API_ROOT}/add-comment`, {  
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                comment, 
                user, 
                id: { 
                    message: messageId, 
                    feedback: feedbackId, 
                    product: productId 
                } 
            })
        });

        if (response.ok) {
            const json = await response.json();

            const { comments: { items } } = getState()
            const newComments = addComment(items, comment, user.name, messageId);
            const flatten = flatComments(newComments);
    
            dispatch({
                type: POST_COMMENT_SUCCESS,
                payload: {
                    comments: newComments,
                    flatten
                }
            });

            return json.id
        } else {
            throw new Error(response.status);            
        }
    } catch (e) {
        dispatch({
            type: POST_COMMENT_FAIL,
            payload: new Error(e).message
        })
    }
}