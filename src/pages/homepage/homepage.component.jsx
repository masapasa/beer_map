import React from 'react';
import HomeHero from '../../components/home-hero/home-hero.component';
import './homepage.styles.scss';

const Homepage = () => {
    return(
        <section className='homepage'>
            <HomeHero headline={'test'} content={'test'} button={'test'} />
        </section>
    );
}

export default Homepage;