import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import '../../../../stylesheets/components/modals/rsvp/rsvp-attendees.css';

import Avatar from 'material-ui/Avatar';
import Checkbox from 'material-ui/Checkbox';

export function Attendee({ name, email, isAttending, onCheck }) {
  const initial = name[0].toUpperCase();

  return (
    <li className={cx('rsvp-attendee', {'attending': isAttending})}>
      <Avatar
        backgroundColor="#44a5c9"
        size={50}
        className="attendee-avatar"
      >
        {initial}
      </Avatar>
      <Avatar
        backgroundColor="white"
        size={54}
        className="attendee-avatar-bg"
      />

      <div className="attendee-data">
        <p className="attendee-name">{name}</p>
        <p className="attendee-email">{email}</p>
        <p className="email edit">
          <a href="#" className="edit-email">
            edit
          </a>
        </p>
      </div>

      <div className="attendee-going">
        <Checkbox
          defaultChecked={isAttending}
          onCheck={onCheck}
        />
      </div>
    </li>
  );
};

class RsvpAttendees extends Component {
  onCheck(evt, isInputChecked) {
    console.log('switch', isInputChecked.toString());
  }

  render() {
    const {
      address_line1,
      address_line2,
      city,
      state,
      zipcode,
    } = this.props.userGroup;

    return (
      <section className="rsvp-attendees">
        <p className="rsvp-attendees-prompt">
          Please confirm whether you and your party are attending.
        </p>
        <ul className="rsvp-attendee-list">
          {
            this.props.users.map((user, index) => {
              const attendee = user.user;
              return (
                <Attendee
                  name={attendee.first_name + " " + attendee.last_name}
                  email={attendee.email}
                  isAttending={attendee.is_attending}
                  onCheck={this.onCheck}
                  key={index}
                />
              )
            })
          }
        </ul>
        <div className="group-address">
          <h3 className="address-title">Address</h3>
          <div className="address-text">
            <p className="address line1">{address_line1}</p>
            <p className="address line2">{address_line2}</p>
            <p className="address line3">{`${city}, ${state} ${zipcode}`}</p>
          </div>
          <p className="address edit">
            <a href="#" className="edit-address">
              edit
            </a>
          </p>
        </div>
      </section>
    );
  }
}

RsvpAttendees.propTypes = {
  userGroup: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
};

export default RsvpAttendees;
