import { USER_LOGGED_IN, USER_LOGGED_OUT, USER_LOADED, LOADING_USER } from './types';
import axios from 'axios';

const authBaseUrl = 'https://lamb-82233.firebaseio.com';
const API_KEY = 'AIzaSyCId27r8hztCXWqR48_iziMWvcv2A1qmpI';

export const userLogged = user => {
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

export const createUser = user => {
    return dispatch => {
        axios.post(`${authBaseUrl}/singupNewUser?key=${API_KEY}`,{
            email: user.email,
            password: user.password,
            returnSecureToken: true
        })
            .catch( err => console.log(err))
            .then( res => {
                if( res.data.localId ) {
                    axios.put(`/users/${res.data.localId}.json`, {
                        nome: user.nome
                    })
                    .catch(err => console.log(err))
                    .then(res => {
                        console.log('Usuario criado');
                    });
                }
            });
    }
}

export const loadingUser = () => {
    return {
        type: LOADING_USER
    }
}

export const userLoaded = () => {
    return {
        type: USER_LOADED
    }
}

export const login = user => {
    return dispatch => {
        dispatch(loadingUser());

        axios.post(`${authBaseUrl}/verifyPassword?key=${API_KEY}`,{
            email: user.email,
            password: user.password,
            returnSecureToken: true
        })
        .catch(err => console.log(err))
        .then(res => {
            dispatch(userLogged(user));
            dispatch(userLoaded());
        });
    }
}