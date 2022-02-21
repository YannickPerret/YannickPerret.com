import {createStore, applyMiddleware} from 'redux';
import blogListPosts from './reducer/BlogReducer';
import thunk from 'redux-thunk';



const store = createStore(blogListPosts, applyMiddleware(thunk))

export default store