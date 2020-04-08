import { createStore, combineReducers,applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'

import userReducer from './reducers/user';
import postsReducer from './reducers/posts';
import messageReducer from './reducers/message';

const reducers = combineReducers({
    user: userReducer,
    posts: postsReducer,
    message: messageReducer,
});

export default () => {
    return createStore(reducers, {}, applyMiddleware(ReduxThunk));
}