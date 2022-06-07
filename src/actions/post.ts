import { Post, fetchPosts as fetchPostsService } from "../services/post";

export const END_FETCH_POSTS_TYPE = 'END_FETCH_POSTS_TYPE';
export const START_FETCH_POSTS_TYPE = 'START_FETCH_POSTS_TYPE';
export const CHANGE_VISIBLE_POSTS_RANGE = 'CHANGE_VISIBLE_POSTS_RANGE';
export const SHOW_NEXT_PAGE = 'SHOW_NEXT_PAGE';
export const SHOW_PREVIOUS_PAGE = 'SHOW_PREVIOUS_PAGE';

const endGettingPostsAction = (posts: Array<Post> = []) => ({
    type: END_FETCH_POSTS_TYPE,
    payload: { posts }
});

const startGettingPostsAction = () => ({
    type: START_FETCH_POSTS_TYPE
});

export const showNextPage = () => ({
    type: SHOW_NEXT_PAGE
})

export const showPreviousPage = () => ({
    type: SHOW_PREVIOUS_PAGE
})

export const changeVisiblePostsRange = () => ({
    type: CHANGE_VISIBLE_POSTS_RANGE,
});

export const fetchPosts = () => {
    return async (dispatch: any) => {
        dispatch(startGettingPostsAction());
        const posts = await fetchPostsService();
        dispatch(endGettingPostsAction(posts));
    };
};
