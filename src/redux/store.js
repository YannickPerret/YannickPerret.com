import {createStore, combineReducers, applyMiddleware} from 'redux';
import blogListPosts from './reducer/BlogReducer';
import thunk from 'redux-thunk';

const rootReducers = combineReducers({
    blogListPosts
})



const store = createStore(blogListPosts, applyMiddleware(thunk))

export default store