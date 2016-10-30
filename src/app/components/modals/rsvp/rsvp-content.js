import React, { Component, PropTypes } from 'react';
import '../../../../stylesheets/components/modals/rsvp/rsvp-content.css';

import RsvpAttendees from './rsvp-attendees';
import RsvpDetails from './rsvp-details';

import headerImage from '../../../../images/rsvp/rsvp-header-image.png';

class RsvpContent extends Component {
  render() {
    const {
      userGroup,
      users,
    } = this.props;

    return (
      <aside className="rsvp-modal">
        <header>
          <img src={headerImage} className="header-image" role="presentation"/>
          You're invited to celebrate our wedding!
        </header>
        <section className="rsvp-body">
          <RsvpAttendees
            userGroup={userGroup}
            users={users}
          />
          <RsvpDetails
            userGroup={userGroup}
          />
        </section>
      </aside>
    );
  }
}

RsvpContent.propTypes = {
  userGroup: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
};

export default RsvpContent;
