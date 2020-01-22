import React from 'react';
import HomeHero from '../../components/home-hero/home-hero.component';
import Featured from '../../components/featured/featured.component';
import Cta from '../../components/cta/cta.component';
import CardsSection from '../../components/cards-section/cards-section.component';
import './homepage.styles.scss';

const Homepage = props => {
    return(
        <section className='homepage'>
            <HomeHero headline={'Get Started'} content={'test'} buttonText={'test'} />
            <Featured sectionHeader={'Featured Breweries'} />
            <Cta headline={'Book a Tour'} content={'Tour text'} buttonText={'Book Now!'} />
            <CardsSection sectionHeader={'Most Popular'} />
            <Cta headline={'Find Events'} content={'Tour text'} buttonText={'See Events'} />
            <CardsSection sectionHeader={'Just Added'} />
        </section>
    );
}

export default Homepage;