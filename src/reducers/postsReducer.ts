import { Post } from '../services/post';
import { END_FETCH_POSTS_TYPE, START_FETCH_POSTS_TYPE, CHANGE_VISIBLE_POSTS_RANGE, SHOW_NEXT_PAGE, SHOW_PREVIOUS_PAGE } from "../actions/post";

type POSTS_TYPES = typeof END_FETCH_POSTS_TYPE | typeof START_FETCH_POSTS_TYPE | typeof CHANGE_VISIBLE_POSTS_RANGE | typeof SHOW_NEXT_PAGE | typeof SHOW_PREVIOUS_PAGE;

export type PostsReducerStateType = {
    pageNumber: number,
    posts: Array<Post>,
    visiblePosts: Array<Post>,
    isLoading: boolean,
    morePages: boolean
};

let SIZE = 50;

const initialState: PostsReducerStateType = { pageNumber: 0, posts: [], visiblePosts: [], isLoading: false, morePages: false }

const postReducer = (state: PostsReducerStateType = initialState, action: { type: POSTS_TYPES, payload: PostsReducerStateType }) => {
    switch (action.type) {

        case START_FETCH_POSTS_TYPE:
            return {
                ...state,
                isLoading: true
            }

        case END_FETCH_POSTS_TYPE:
            const { payload: { posts } } = action;
            return {
                ...state,
                posts,
                visiblePosts: posts.slice(state.pageNumber * SIZE, (state.pageNumber + 1) * SIZE),
                isLoading: false,
                morePages: true
            }

        case SHOW_PREVIOUS_PAGE:
            const previousPageNumber = state.pageNumber - 1;
            return {
                ...state,
                visiblePosts: state.posts.slice(previousPageNumber * SIZE, state.pageNumber * SIZE),
                pageNumber: previousPageNumber,
                morePages: true
            };
            
        case SHOW_NEXT_PAGE:
            const nextPageNumber = state.pageNumber + 1;
            return {
                ...state,
                visiblePosts: state.posts.slice(nextPageNumber * SIZE),
                pageNumber: nextPageNumber,
                morePages: false
            };

        default:
            return state
    }
}

export default postReducer;