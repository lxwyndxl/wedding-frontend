import React, { Component } from 'react';
import Scroll from 'react-scroll';
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

const Element = Scroll.Element;

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderNav />
        <Hero />
        <CtaSection />
        <section className="bride-and-groom scrollable">
          <Element name="bride-and-groom" className="scroll-to-wrapper">
            <About />
            <Timeline />
          </Element>
        </section>
        <section className="wedding-party scrollable">
          <Element name="wedding-party" className="scroll-to-wrapper">
            <Bridesmaids />
            <Groomsmen />
            <OtherParty />
          </Element>
        </section>
        <section className="the-day-of scrollable">
          <Element name="the-day-of" className="scroll-to-wrapper">
            <DayOf />
          </Element>
        </section>
        <Dialog />
      </div>
    );
  }
}

export default App;
