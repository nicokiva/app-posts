import React from 'react';
import { showNextPage } from '../../actions/post';
import PaginatorBase from './paginatorBase';

const ViewMore: React.FC = (): JSX.Element => (
    <PaginatorBase text="View More >" onClick={showNextPage} />
);

export default ViewMore;