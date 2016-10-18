import React, { Component } from 'react';
import cx from 'classnames';
import '../../../../stylesheets/components/modals/rsvp/rsvp-attendees.css';

import Avatar from 'material-ui/Avatar';
import Checkbox from 'material-ui/Checkbox';
import { green500 } from 'material-ui/styles/colors';

const DATA = [
  {
    name: 'Misty Kasumi',
    email: 'mistykasumi@gmail.com',
    isAttending: false,
  },
  {
    name: 'Ash Ketchum',
    email: 'ashketchum@gmail.com',
    isAttending: true,
  },
  {
    name: 'Brock Takeshi',
    email: 'brocktakeshki@gmail.com',
    isAttending: true,
  },
  {
    name: 'Gary Oak',
    email: 'garyoak@gmail.com',
    isAttending: false,
  },
  {
    name: 'Professor Oak',
    email: 'profoak@gmail.com',
    isAttending: true,
  },
];

export function Attendee({ name, email, isAttending, onCheck }) {
  const initial = name[0];

  return (
    <li className={cx('rsvp-attendee', {'attending': isAttending})}>
      <Avatar
        backgroundColor={green500}
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
    return (
      <section className="rsvp-attendees">
        <p className="rsvp-attendees-prompt">
          Please confirm whether you and your party are attending.
        </p>
        <ul className="rsvp-attendee-list">
          {
            DATA.map((attendee, index) => {
              return (
                <Attendee
                  name={attendee.name}
                  email={attendee.email}
                  isAttending={attendee.isAttending}
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
            <p className="address line1">2089 Pacific Blvd</p>
            <p className="address line2">Apt 214</p>
            <p className="address line3">San Mateo, CA 94403</p>
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

export default RsvpAttendees;
