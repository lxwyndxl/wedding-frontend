import React, { Component } from 'react';
import '../../stylesheets/containers/App.css';

import HeaderNav from './nav';
import Hero from '../components/hero';
import Cta from '../components/cta';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderNav />
        <Hero />
        <Cta />
      </div>
    );
  }
}

export default App;
