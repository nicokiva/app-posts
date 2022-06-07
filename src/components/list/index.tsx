import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../actions/post';
import { PostsReducerStateType } from '../../reducers/postsReducer';
import Card from '../card';
import ViewMore from './viewMore';
import ViewPrevious from './viewPrevious';

const List = () => {
    const { visiblePosts, isLoading, morePages } = useSelector<PostsReducerStateType, PostsReducerStateType>((store: PostsReducerStateType) => store);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isLoading) {
            return;
        }

        dispatch(fetchPosts() as any);
    }, [dispatch]);

    if (isLoading) {
        return <>Loading...</>;
    }

    return (
        <section className="posts-grid-container">
            {!morePages && <ViewPrevious />}

            {visiblePosts.map(post => <Card key={post.id} post={post} />)}

            {morePages && <ViewMore />}
        </section>
    )
};

export default List;