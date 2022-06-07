import React from 'react';
import { Post } from "../../services/post";
import Container from './container';

const Card: React.FC<{ post: Post }> = ({ post }): JSX.Element => (
    <Container>
        <header>
            {post.title}
        </header>

        <section>
            {post.body}
        </section>
    </Container>
);

export default Card;