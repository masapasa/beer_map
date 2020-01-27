import React from 'react';
import { Fade } from 'react-animation-components';
import './footer.styles.scss';

const Footer = () => {
    return(
        <Fade in duration={1000}>
            <footer className="container-fluid px-0">
                <div className="row border-0 m-0 p-5 cta-callout">
                    <div className="col-md-9 pb-3">
                        <h3>Learn More About Beer!</h3>
                        <p className="lead">uis molestie placerat leo, id convallis nunc mattis a. Ut ac est elit. Fusce interdum turpis sed ligula suscipit, quis feugiat odio gravida.</p>
                    </div>
                    <div className="col-md-3 d-flex align-items-center">
                        <button className="btn btn-secondary btn-lg btn-block">Learn More!</button>
                    </div>
                </div>
            </footer>
        </Fade>  
    );
}

export default Footer;