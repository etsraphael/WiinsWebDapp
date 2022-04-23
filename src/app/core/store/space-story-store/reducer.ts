import { ActionsStoryPosts, ActionTypes } from './action';

const initialState = {
    spaceStoryPosts: [
        {
            comment: 'Hey what\'s up !',
            creator: 'Nathanaël',
            avatarCreator: 'https://images.unsplash.com/photo-1459356979461-dae1b8dcb702?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            pictureCover: 'linear-gradient(135deg, #1BB7E9 10%, #2B418D 100%)',
            creationMode: 'writtenPost'
        },
        {
            comment: 'What about the next step ?',
            creator: 'Raphaël',
            avatarCreator: 'https://images.unsplash.com/photo-1490129375591-2658b3e2ee50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1253&q=80',
            pictureCover: 'linear-gradient(135deg, #D92E2E 10%, #6C1B1B 100%)',
            creationMode: 'writtenPost'
        },
        {
            comment: 'I\'ll put $1000 in our token',
            creator: 'Lévine',
            avatarCreator: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
            pictureCover: 'https://images.unsplash.com/photo-1649452812708-45ec626f9055?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            creationMode: 'picturePost'
        }
    ],
}

export function spaceStoryPostsReducer(
    state = initialState,
    action: ActionsStoryPosts
) {
    switch (action.type) {
        case ActionTypes.ADD_STORY_POST:
            return {
                ...state,
                spaceStoryPosts: [...state.spaceStoryPosts, action.payload]
            }
        default:
            return state;
    }
}