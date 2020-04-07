import { USER_LOGGED_IN, USER_LOGGED_OUT } from './types';

export const login = user => {
    return dispatch => dispatch({
        type: USER_LOGGED_IN,
        payload: user
    })
    
}

export const logout = () => {
    return dispatch => {
        dispatch({type: USER_LOGGED_OUT});
    }
}