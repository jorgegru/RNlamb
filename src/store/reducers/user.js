import { USER_LOGGED_IN, USER_LOGGED_OUT, LOADING_USER, USER_LOADED } from '../actions/types';

const initialState = {
    nome: '',
    email: null,
    isLoading: false
}

export default  (state = initialState, action) => {
    switch(action.type) {
        case USER_LOGGED_IN:
            return {...state, nome: action.payload.nome, email: action.payload.email}
        case USER_LOGGED_OUT:
            return {...state, nome: '', email: ''}
        case LOADING_USER:
            return {...state, isLoading: true}
        case USER_LOADED:
            return {...state, isLoading: false}
        default:
            return state;
    }
}