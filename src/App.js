import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import Loader from './components/utilities/loader.component';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import Map from './pages/map/map.component';
import Footer from './components/footer/footer.component';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //Connect to Wordpress API
      breweries: [],
      isLoading: true
    };
  }

  async componentDidMount() {

    this.setState({isLoading: false});

    await axios.get('https://coloradobeermap.com/wp-json/wp/v2/brewery')
    .then(res => {
      const breweries = res.data;
      this.setState({ breweries });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    
    const { isLoading, breweries } = this.state;
    console.log(breweries);

    if(isLoading) {
      return <Loader />;
    }
    else {
      return(
        <div className='container-fluid'>
          <Header />
              <main role='main'>
                  <Switch>
                      <Route exact path='/' component={Homepage} />
                      <Route exact path='/map' component={Map} />
                      <Redirect to='/' />
                  </Switch>
              </main>
          <Footer />
      </div>
      );
    }
  }
}

export default App;
