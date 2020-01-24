import React from 'react';
import HomeHero from '../../components/home-hero/home-hero.component';
import Featured from '../../components/featured/featured.component';
import MostPopular from '../../components/most-popular/most-popular.component';
import MostRecent from '../../components/most-recent/most-recent.component';
import Cta from '../../components/cta/cta.component';
import './homepage.styles.scss';

const Homepage = props => {
    return(
        <section className='homepage'>
            <HomeHero headline={'Get Started'} content={'test'} buttonText={'test'} />
            <Featured />
            <Cta headline={'Book a Tour'} content={'Tour text'} buttonText={'Book Now!'} />
            <MostPopular />
            <Cta headline={'Find Events'} content={'Tour text'} buttonText={'See Events'} />
            <MostRecent />
        </section>
    );
}

export default Homepage;