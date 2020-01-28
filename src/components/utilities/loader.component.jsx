import React from 'react';
import { Spinner } from 'reactstrap';
import './loader.styles.scss';

const Loader = props => {
    return (
        <div className='loader'>
            <Spinner style={{ width: '2rem', height: '2rem' }} color="danger"/>{' '} 
        </div>
    );
};

export default Loader;