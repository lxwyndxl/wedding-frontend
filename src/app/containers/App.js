import React, { Component } from 'react';
import '../../stylesheets/containers/App.css';

import HeaderNav from './nav';
import Hero from '../components/hero';
import Cta from '../components/cta';
import About from '../components/about';
import Timeline from '../components/timeline';
import Bridesmaids from '../components/bridesmaids';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderNav />
        <Hero />
        <Cta />
        <About />
        <Timeline />
        <Bridesmaids />
      </div>
    );
  }
}

export default App;
