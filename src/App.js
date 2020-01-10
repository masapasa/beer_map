import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { BREWERIESDB } from './shared/breweriesdb';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import Footer from './components/footer/footer.component';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      breweries: BREWERIESDB
    };
  }
  render() {
    console.log(BREWERIESDB);
    return (
      <div className='container-fluid'>
          <Header />
              <main role='main'>
                  <Switch>
                      <Route exact path='/' component={Homepage} />
                      <Redirect to='/' />
                  </Switch>
              </main>
          <Footer />
      </div>
    );
  }
}

export default App;
