import React from 'react';

const CtaButton = props => {
    return(
        <div className="col-md-3 d-flex align-items-center">
            <button className="btn btn-secondary btn-lg btn-block">{props.button}</button>
        </div>
    );
}

export default CtaButton;