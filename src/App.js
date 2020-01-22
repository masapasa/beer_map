import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from './shared/sharedKeys';
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

  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      breweries: [],
      isLoading: true
    };

    axios.get( baseUrl )
    .then(res => {
      const breweries = res.data;
      this.setState({ breweries });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  componentDidMount() {
    this._isMounted = true;
    this.setState({isLoading: false});
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    
    const { isLoading, breweries } = this.state;

    if(isLoading) {
      return <Loader />;
    }
    else {
      return(
        <div >
          <Header />
              <main role='main'>
                <Route render={({location}) => (
                  <TransitionGroup>
                    <CSSTransition
                      key={location.key}
                      classNames="fade"
                      timeout={2000}
                    >
                      <Switch>
                          <Route exact path='/' render={() => <Homepage brewerydata={breweries} />} />
                          <Route path='/city-listing/:cityName' component={CityListing}  />
                          <Route path='/map' render={() => <Map brewerydata={breweries} />} />
                          <Route path='/detailed-listing/:breweryId' render={() => <DetailedListing brewerydata={breweries} />} />
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
