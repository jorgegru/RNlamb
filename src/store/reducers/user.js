import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../actions/types';

const initialState = {
    nome: '',
    email: null
}

export default  (state = initialState, action) => {
    switch(action.type) {
        case USER_LOGGED_IN:
            return {...state, nome: action.payload.nome, email: action.payload.email}
        case USER_LOGGED_OUT:
            return {...state, nome: '', email: ''}
        default:
            return state;
    }
}