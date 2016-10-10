import React, { Component } from 'react';
import '../../stylesheets/components/day-of.css';

import map from '../../images/map.png';
import calendar from '../../images/calendar.png';

class OtherParty extends Component {

  render() {
    return (
      <section className="day-of">
        <header>THE DAY OF</header>
        <div className="day-of-content">
          <div className="day-of-item">
            <img src={map} className="day-of-map" alt="The day of map" />
            <p className="day-of-title">CHALET VIEW LODGE</p>
            <p className="day-of-desc">
              72056 Highway 70
              <br />
              Graeagle, CA 96103
            </p>
          </div>
          <div className="day-of-item">
            <img src={calendar} className="day-of-cal" alt="The day of calendar" />
            <p className="day-of-title">MEMORIAL DAY WEEKEND</p>
            <p className="day-of-desc">
              09/02/2017 - 09/04/2017 *
              <br />
              Saturday, 4:30 PM
            </p>
          </div>
        </div>
        <p className="day-of-note">
          * Our wedding is a weekend getaway. You are invited to stay from the 2nd to the 4th.
        </p>
      </section>
    );
  }
}

export default OtherParty;
