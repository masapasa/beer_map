import React from 'react';
import HomeHero from '../../components/home-hero/home-hero.component';
import Cta from '../../components/cta/cta.component';
import './homepage.styles.scss';

const Homepage = () => {
    return(
        <section className='homepage'>
            <HomeHero headline={'Get Started'} content={'test'} buttonText={'test'} />
            <Cta headline={'Book a Tour'} content={'Tour text'} buttonText={'Book Now!'} />
        </section>
    );
}

export default Homepage;