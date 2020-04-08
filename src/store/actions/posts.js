import { SET_POSTS, ADD_COMMENT, CREATING_POST, POST_CREATED } from './types';
import axios from 'axios';
import { setMessage } from './message';

export const addPost = post => {
    
    return dispatch => {

        dispatch(creatingPost());
        axios.post('/posts.json', {...post})
            .catch(err => {
                dispatch(setMessage({
                    title: 'Erro',
                    text: 'Ocorreu um erro'
                }));
            })
            .then(res => {
                dispatch(fetchPosts());
                dispatch(postCreated());
                
            });
    }

}

export const addComment = payload => {
    console.log(payload);
    return dispatch => {
        axios.get(`/posts/${payload.postId}.json`)
            .catch( err => console.log(err))
            .then(res => {
                const comments = res.data.comments || [];
                comments.push(payload.comment);

                axios.patch(`/posts/${payload.postId}.json`, { comments })
                    .catch( err => {
                        dispatch(setMessage({
                            title: 'Erro',
                            text: 'Ocorreu um erro'
                        }));
                    } )
                    .then( red => {
                        dispatch(fetchPosts());
                    });
            });
    }

    // return {
    //     type:ADD_COMMENT,
    //     // payload: comment
    // }
}

export const setPosts = posts => {
    return {
        type: SET_POSTS,
        payload: posts
    }
}

export const fetchPosts = () => {
    return dispatch => {
        axios.get('/posts.json')
            .catch(err => {
                dispatch(setMessage({
                    title: 'Erro',
                    text: 'Ocorreu um erro'
                }));
            })
            .then(res=>{
                const rawPosts = res.data;
                const posts = [];
                for( let key in rawPosts) {
                    posts.push({
                        ...rawPosts[key],
                        id: key
                    })
                }

                dispatch(
                    setPosts(posts.reverse())
                );
            });
            
    }
}

export const creatingPost = () => {
    return {
        type: CREATING_POST
    }
}

export const postCreated = () => {
    return {
        type: POST_CREATED
    }
}