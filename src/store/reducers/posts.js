import { ADD_POST, ADD_COMMENT } from '../actions/types';

const initialState = {
    posts: [{
        id: Math.random(),
        nickname: 'Jorgge Grumaria Jesus',
        email: 'elisa@teste.com.br',
        image: require('../../../assets/imgs/fence.jpg'),
        comments: [
            {
                nickname: 'John Ray sheen',
                comment: 'Stunnis vamos!'
            },
            {
                nickname: 'Julia kisandra',
                comment: 'Não gostei!'
            },
        ]
    },{
        id: Math.random(),
        nickname: 'Fransisco De oliveira',
        email: 'fransisco@teste.com.br',
        image: require('../../../assets/imgs/bw.jpg'),
        comments: []
    }]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return { ...state,
                posts: state.posts.concat({
                    ...action.payload
                })
            };
        case ADD_COMMENT:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if(post.id === action.payload.postId) {
                        if(post.comments) {
                            post.comments = post.comments.concat(
                                action.payload.comment
                            );
                        } else {
                            post.comments = [action.payload.comment]
                        }
                    }
                    return post;
                })
            }

        default:
            return state
    }
};
