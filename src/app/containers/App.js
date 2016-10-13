import React, { Component } from 'react';
import '../../stylesheets/components/App.css';

import HeaderNav from '../components/nav';
import Hero from '../components/hero';
import CtaSection from './cta-section';
import About from '../components/about';
import Timeline from '../components/timeline';
import Bridesmaids from '../components/bridesmaids';
import Groomsmen from '../components/groomsmen';
import OtherParty from '../components/other-party';
import DayOf from '../components/day-of';
import Dialog from './dialog';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderNav />
        <Hero />
        <CtaSection />
        <About />
        <Timeline />
        <Bridesmaids />
        <Groomsmen />
        <OtherParty />
        <DayOf />
        <Dialog />
      </div>
    );
  }
}

export default App;
