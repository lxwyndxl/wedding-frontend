import React from 'react';
import '../../stylesheets/components/hero.css';

import brideAndGroomImage from '../../images/bride-and-groom.png';

function RsvpHero({ isAnyoneAttending }) {
  let line1 = "THANKS FOR";
  let line2 = "RSVPING";

  if (!isAnyoneAttending) {
    line1 = "WE WILL";
    line2 = "MISS YOU!"
  }
  return (
    <section className="hero">
      <div className="max-width">
        <div className="hero-image-container">
          <img src={brideAndGroomImage} className="hero-image" alt="Bride and groom" />
        </div>
        <div className="hero-rsvp-container">
          <p className="welcome-text welcome-text-1">{line1}</p>
          <p className="welcome-text welcome-text-1">{line2}</p>
        </div>
      </div>
    </section>
  );
}

export default RsvpHero;
