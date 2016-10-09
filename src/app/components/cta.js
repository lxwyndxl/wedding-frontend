import React, { Component } from 'react';
import '../../stylesheets/components/cta.css';

export function RSVPButton({ text, onClick }) {
  return (
    <button
      className="rsvp-button"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

class CTA extends Component {
  onRSVP() {
    // Show dialog
  }

  render() {
    return (
      <section className="cta">
        <RSVPButton
          text="RSVP NOW"
          onClick={this.onRSVP}
        />
      </section>
    );
  }
}

export default CTA;
