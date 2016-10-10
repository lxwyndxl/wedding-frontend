import React, { Component } from 'react';
import '../../stylesheets/containers/App.css';

import HeaderNav from './nav';
import Hero from '../components/hero';
import Cta from '../components/cta';
import About from '../components/about';
import Timeline from '../components/timeline';
import Bridesmaids from '../components/bridesmaids';
import Groomsmen from '../components/groomsmen';
import OtherParty from '../components/other-party';

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
        <Groomsmen />
        <OtherParty />
      </div>
    );
  }
}

export default App;
