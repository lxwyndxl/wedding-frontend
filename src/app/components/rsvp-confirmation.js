import React, { Component, PropTypes } from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';

function AttendeeList({
  subheader,
  users,
}) {
  return (
    <List>
      <Subheader>{subheader}</Subheader>
      {
        users.map((user) => {
          const initial = user.first_name[0].toUpperCase();
          return (
            <ListItem
              leftAvatar={
                  <Avatar
                    backgroundColor="#44a5c9"
                    size={50}
                  >
                  {initial}
                </Avatar>
              }
              primaryText={`${user.first_name} ${user.last_name}`}
              secondaryText={user.email}
              key={user.id}
            />
          );
        })
      }
    </List>
  );
}

function Lodging({ userGroup }) {
  const {
    lodging_friday,
    lodging_saturday,
    lodging_sunday,
  } = userGroup;
  const lodgingDays = [lodging_friday, lodging_saturday, lodging_sunday];
  const requestedLodgingDays = lodgingDays.filter((day) => { return day });

  if (requestedLodgingDays.length > 0) {
    return (
      <div>
        You are requesting lodging for:
        <ul>
          {lodging_friday && <li>Friday, Sept 01</li>}
          {lodging_saturday && <li>Saturday, Sept 02 <b>(Wedding day)</b></li>}
          {lodging_sunday && <li>Sunday, Sept 03</li>}
        </ul>
      </div>
    );
  }

  return (
    <div>
      <p className="error">
        You are <b>not</b> requesting on-site lodging. There are many other options
        nearby such as:
      </p>
      <ul>
        <li>Example 1: Pine lodge</li>
        <li>Example 2:</li>
        <li>some other place</li>
      </ul>
    </div>
  );
}

export default class RsvpConfirmation extends Component {
  componentWillMount() {
    const { users, onRouteToHomepage } = this.props;
    if (users.length === 0) {
      onRouteToHomepage();
    }
  }

  render() {
    const { userGroup, users, onRsvpClick } = this.props;
    if (users.length === 0) return null;

    const totalAttendees = users
      .map(user => user.is_attending)
      .reduce(function(a, b) { return a + b });
    const isAnyoneAttending = totalAttendees > 0;


    return (
      <section className="rsvp-confirmation">
        <h1>{isAnyoneAttending ? "We look forward to seeing you!" : "We will miss you!"}</h1>

        <h2>Here’s a confirmation of what you told us:</h2>

        <AttendeeList
          subheader="Attending"
          users={users.filter((user) => { return user.is_attending })}
        />
        <Divider />
        <AttendeeList
          subheader="Not Attending"
          users={users.filter((user) => { return !user.is_attending })}
        />

        {isAnyoneAttending &&
          <div>
            <Divider />
            This is a destination wedding north of Lake Tahoe, California.
            <Lodging userGroup={userGroup} />
          </div>
        }

        <h3>Want to change something?</h3>
        <FlatButton
          onClick={onRsvpClick}
        >
          Edit your RSVP
        </FlatButton>
      </section>
    );
  }
}

RsvpConfirmation.propTypes = {
  userGroup: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  onRsvpClick: PropTypes.func.isRequired,
  onRouteToHomepage: PropTypes.func.isRequired,
};
