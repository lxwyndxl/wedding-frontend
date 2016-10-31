import React, { Component, PropTypes } from 'react';

export default class RsvpConfirmation extends Component {

  constructor(props) {
    super(props);
    // TODO(Jessica) move this to constructor
    const { users } = props;
    this._totalAttendees = -1;
    if (users.length > 0) {
      this._totalAttendees = props.users.reduce((totalAttendees, user) => {
        return totalAttendees + user.user.is_attending;
      });
    }
  }

  render() {

    return (
      <section className="rsvp-confirmation">
        <p>{this._totalAttendees > 0 ? "We look forward to seeing you!" : "We will miss you!"}</p>

        <h2>Here’s a confirmation of what you told us:</h2>

        Want to change something?
        <button
          className="rsvp-button"
          onClick={this.props.onRsvpClick}
        >
          Edit your RSVP
        </button>
      </section>
    );
  }
}

RsvpConfirmation.propTypes = {
  onRsvpClick: PropTypes.func.isRequired,
  userGroup: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
};
