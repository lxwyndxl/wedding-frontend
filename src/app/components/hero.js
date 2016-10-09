import React, { Component } from 'react';
import '../../stylesheets/components/hero.css';

import brideAndGroomImage from '../../images/bride-and-groom.png';
import heroDivider from '../../images/hero-divider.png';

class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <div className="max-width">
          <div className="hero-image-container">
            <img src={brideAndGroomImage} className="hero-image" alt="Bride and groom" />
          </div>
          <div className="hero-welcome-container">
            <h1 className="jessica-plus-anh">
              JESSICA + ANH
            </h1>
            <img src={heroDivider} className="hero-divider" role="presentation" />
            <p className="welcome-text welcome-text-1">CELEBRATE</p>
            <p className="welcome-text welcome-text-2">THE START OF</p>
            <p className="welcome-text welcome-text-3">OUR JOURNEY</p>
            <p className="welcome-text welcome-text-4">WITH US</p>
            <p className="wedding-date">09.02.17</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
