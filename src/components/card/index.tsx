import React from 'react';
import { Post } from "../../services/post";
import Container from './container';

const Card = ({ post }: { post: Post }): JSX.Element => (
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