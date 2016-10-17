import React, { Component } from 'react';
import '../../../../stylesheets/components/modals/rsvp/rsvp.css';

import RsvpAttendees from './rsvp-attendees';
import RsvpDetails from './rsvp-details';

import headerImage from '../../../../images/rsvp/rsvp-header-image.png';

class Rsvp extends Component {
  render() {
    return (
      <aside className="rsvp-modal">
        <header>
          <img src={headerImage} className="header-image" role="presentation"/>
          You and your party are invited to our wedding!
        </header>
        <section className="rsvp-body">
          <RsvpAttendees/>
          <RsvpDetails/>
        </section>
      </aside>
    );
  }
}

export default Rsvp;
