import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Switch, Route, Redirect } from 'react-router-dom';
import Loader from './components/utilities/loader.component';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import Map from './pages/map/map.component';
import DetailedListing from './pages/detailed-listing/detailed-listing.component';
import CityListing from './pages/city-listing/city-listing.component';
import Contact from './pages/contact/contact.component';
import Signup from './pages/sign-up/sign-up.component';
import Footer from './components/footer/footer.component';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    this.setState({isLoading: false});
  }

  render() {
    
    const { isLoading } = this.state;

    if(isLoading) {
      return <Loader />;
    }
    else {
      return(
        <div className="wrapper">
          <Header />
              <main role="main">
                <Route render={({location}) => (
                  <TransitionGroup>
                  <CSSTransition key={location.key} classNames="fade" timeout={300}>
                      <Switch>
                          <Route exact path='/' component={Homepage} />
                          <Route path='/city-listing/:cityName' component={CityListing}  />
                          <Route path='/map' component={Map} />
                          <Route exact path='/detailed-listing/:breweryId' component={DetailedListing} />
                          <Route path='/contact' component={Contact} />
                          <Route path='/sign-up' component={Signup} />
                          <Redirect to='/' />
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>
                )} />
              </main>
          <Footer />
        </div>
      );
    }
  }
}

export default App;
