import React from 'react';
import Container from '../card/container';
import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';

const PaginatorBase: React.FC<{ text: string, onClick: () => AnyAction }> = ({ text, onClick }): JSX.Element => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(onClick())    
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <Container className="view-action">
            <button onClick={handleClick}>{text}</button>
        </Container>
    )
};

export default PaginatorBase;