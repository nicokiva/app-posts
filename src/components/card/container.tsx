import React from 'react';

const CardContainer: React.FC<{ children: JSX.Element | Array<JSX.Element>, className?: string }> = ({ children, className }): JSX.Element => (
    <article className={`post-container ${className ? className : ''}`}>
        {children}
    </article>
);

export default CardContainer;