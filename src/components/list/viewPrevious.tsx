import React from 'react';
import Container from '../card/container';
import { useDispatch } from 'react-redux';
import { showPreviousPage } from '../../actions/post';

const ViewPrevious = (): JSX.Element => {
    const dispatch = useDispatch();
    
    const handleClick = () => {
        dispatch(showPreviousPage());
    };

    return (
        <Container className="view-action view-previous">
            <button onClick={handleClick}>{"< View Less"}</button>
        </Container>
    )
};

export default ViewPrevious;