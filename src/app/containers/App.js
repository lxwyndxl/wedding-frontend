import React, { Component } from 'react';
import '../../stylesheets/containers/App.css';

import HeaderNav from './nav';
import Hero from '../components/hero';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderNav />
        <Hero />
      </div>
    );
  }
}

export default App;
