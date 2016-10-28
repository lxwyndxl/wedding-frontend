import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showRsvpModal } from '../actions/show-rsvp-modal';
import '../../stylesheets/components/cta.css';

class Cta extends Component {

  constructor(props) {
    super(props);
    this.dispatch = props.dispatch;
    this.onRsvpClick = this.onRsvpClick.bind(this);
  }

  onRsvpClick() {
    this.dispatch(showRsvpModal());
  }

  render() {
    return (
      <section className="cta">
        <button
          className="rsvp-button"
          onClick={this.onRsvpClick}
        >
          RSVP NOW
        </button>
      </section>
    );
  }
}

Cta = connect()(Cta);

export default Cta;
