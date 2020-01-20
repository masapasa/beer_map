import React from 'react';
import Hero from '../../components/utilities/hero.component';
import './sign-up.styles.scss';

const Signup = props => {
    return(
        <section className="sign-up">
            <Hero />
            <h1>Sign Up</h1>
        </section>
    );
}

export default Signup;