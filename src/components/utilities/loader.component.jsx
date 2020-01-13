import React from 'react';
import { Spinner } from 'reactstrap';
import './loader.styles.scss';

const Loader = props => {
    return (
        <div className='loader'>
           <Spinner style={{ width: '3rem', height: '3rem' }} />{' '} 
        </div>
    );
};

export default Loader;