import postsReducer from './postsReducer';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';

export default createStore(postsReducer, applyMiddleware(thunk));