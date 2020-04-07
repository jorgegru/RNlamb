import { createStore, combineReducers,applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'

import userReducer from './reducers/user';
import postsReducer from './reducers/posts';

const reducers = combineReducers({
    user: userReducer,
    posts: postsReducer,
});

export default () => {
    return createStore(reducers, {}, applyMiddleware(ReduxThunk));
}