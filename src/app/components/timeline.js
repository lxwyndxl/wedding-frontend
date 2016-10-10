import React, { Component } from 'react';
import '../../stylesheets/components/timeline.css';

import timeline from '../../images/timeline.png';
import marriage from '../../images/marriage.png';
import house from '../../images/house.png';
import stroller from '../../images/stroller.png';
import rocket from '../../images/rocket.png';

const TIMELINE_EVENTS = [
  {
    event: 'meet',
    text: 'Meet for the very first time',
  },
  {
    event: 'court',
    text: 'Lots of courting',
  },
  {
    event: 'date',
    text: 'Start dating',
  },
  {
    event: 'study',
    text: 'Study in Hong Kong',
  },
  {
    event: 'move',
    text: 'Move to Bay Area',
  },
  {
    event: 'adopt',
    text: 'Adopt baoBao',
  },
  {
    event: 'move-in',
    text: 'Move in together',
  },
  {
    event: 'propose',
    text: 'Anh proposes',
  },
  {
    event: 'marry',
    image: marriage,
  },
  {
    event: 'buy',
    image: house,
  },
  {
    event: 'have',
    image: stroller,
  },
  {
    event: 'launch',
    image: rocket,
  }
];

export function TimelineEvent({ event, text, image }) {
  const timelineClass = event +
    (image ? ' image-event timeline-event' : ' timeline-event');

  return (
    <div className={timelineClass}>
      {text && <p className="event-text">{text}</p>}
      {image && <img className="event-image" src={image} alt="timeline event" />}
    </div>
  );
}

class Timeline extends Component {

  render() {
    return (
      <section className="timeline">
        <div className="timeline-events-container">
          {
            TIMELINE_EVENTS.map((event, index) => {
              return (
                <TimelineEvent
                  event={event.event}
                  text={event.text}
                  image={event.image}
                  key={index}
                />
              );
            })
          }
        </div>
        <div className="timeline-dates-container">
          <p className="year y2008">2008</p>
          <p className="year y2010">2010</p>
          <p className="year y2012">2012</p>
          <p className="year y2014">2014</p>
          <p className="year y2016">2016</p>
          <p className="year y2099">2099</p>
        </div>
        <img src={timeline} className="timeline-image max-width"
          alt="Timeline with years marked"/>
      </section>
    );
  }
}

export default Timeline;
