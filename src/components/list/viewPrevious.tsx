import React from 'react';
import { showPreviousPage } from '../../actions/post';
import PaginatorBase from './paginatorBase';

const ViewPrevious: React.FC = (): JSX.Element => (
    <PaginatorBase text="< View Previous" onClick={showPreviousPage} />
);

export default ViewPrevious;