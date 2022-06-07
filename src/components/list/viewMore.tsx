import React from 'react';
import Container from '../card/container';
import { useDispatch } from 'react-redux';
import { showNextPage } from '../../actions/post';

const ViewMore = (): JSX.Element => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(showNextPage())    
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <Container className="view-action view-more">
            <button onClick={handleClick}>{"View more >"}</button>
        </Container>
    )
};

export default ViewMore;