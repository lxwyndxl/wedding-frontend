import React, { Component } from 'react';
import '../../stylesheets/components/cta.css';

class RsvpButton extends Component {

  render() {
    return (
      <section className="cta">
        <button
          className="rsvp-button"
          onClick={this.props.onRsvpClick}
        >
          RSVP NOW
        </button>
      </section>
    );
  }
}

export default RsvpButton;
