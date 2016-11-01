import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import '../../../../stylesheets/components/modals/rsvp/rsvp-attendees.css';

import {
  updateAttendingStatus,
  toggleEmailEditState,
  updateUserEmail
} from '../../../actions/rsvp-attendees';

import Avatar from 'material-ui/Avatar';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';

export function Attendee({
  name,
  email,
  isAttending,
  onCheck,
  id,
  onEmailEdit,
  onEmailChange,
  isEditing,
}) {
  const initial = name[0].toUpperCase();
  const checkboxName = `user-${id}`;
  const emailInputName = `email-${id}`;
  const inputStyle = {
    fontSize: 13,
    width: 200,
    height: 38,
  };

  let emailEditText = '';
  if (isEditing) {
    emailEditText = 'done';
  } else {
    emailEditText = email ? 'edit' : 'add email';
  }

  return (
    <li className={cx('rsvp-attendee', { attending: isAttending })}>
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
        {
          !isEditing && <p className="attendee-name">{name}</p>
        }
        {
          isEditing ? <TextField
                        defaultValue={email}
                        className="attendee-email-edit"
                        name={emailInputName}
                        data-user-id={id}
                        style={inputStyle}
                        onChange={onEmailChange}
                        autoFocus
                      />
                    : <p className="attendee-email">{email}</p>
        }

        <p className={cx('email edit', { editing: isEditing })}>
          <a
            href="#"
            className="edit-email"
            onClick={onEmailEdit}
            data-user-id={id}
          >
            {emailEditText}
          </a>
        </p>
      </div>

      {!isEditing &&
        <div className="attendee-going">
          <Checkbox
            defaultChecked={isAttending}
            onCheck={onCheck}
            data-user-id={id}
            name={checkboxName}
          />
        </div>
      }
    </li>
  );
};

class RsvpAttendees extends Component {
  constructor(props) {
    super(props);
    this.onCheck = this.onCheck.bind(this);
    this.onEmailEdit = this.onEmailEdit.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.dispatch = props.dispatch;
  }

  onCheck(evt, isInputChecked) {
    const userId = parseInt(evt.target.dataset.userId, 10);
    this.dispatch(updateAttendingStatus(userId, isInputChecked));
  }

  onEmailEdit(evt) {
    evt.preventDefault();
    const userId = parseInt(evt.target.dataset.userId, 10);
    this.dispatch(toggleEmailEditState(userId));
  }

  onEmailChange(evt, text) {
    const userId = parseInt(evt.target.dataset.userId, 10);
    this.dispatch(updateUserEmail(userId, text));
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
              return (
                <Attendee
                  name={user.first_name + " " + user.last_name}
                  email={user.email}
                  isAttending={user.is_attending}
                  onCheck={this.onCheck}
                  id={user.id}
                  onEmailEdit={this.onEmailEdit}
                  onEmailChange={this.onEmailChange}
                  isEditing={user.isEditing}
                  key={index}
                />
              );
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

RsvpAttendees = connect()(RsvpAttendees);

export default RsvpAttendees;
