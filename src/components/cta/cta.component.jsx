import React from 'react';
import CtaButton from '../utilities/cta-button.component';
import './cta.styles.scss';

const Cta = props => {
    return(
        <section className="container py-3 px-0 cta-callout my-5">
            <div className="row border-0 m-0 p-5">
                <div className="col-md-9 pb-3">
                    <h3>{props.headline}</h3>
                    <p className="lead">{props.content}</p>
                </div>
                <CtaButton button={props.buttonText} />
            </div>
        </section>
    );
}

export default Cta;