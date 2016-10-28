import React, { Component } from 'react';
import { connect } from 'react-redux'
import { showRsvpPasscodeModal } from '../actions/show-rsvp-modal';
import Scroll from 'react-scroll';
import '../../stylesheets/components/nav.css';

import logo from '../../images/logo.png';

const Link = Scroll.Link;

const SCROLLABLE_HEADER_NAV_ANCHORS = [
  {
    text: 'BRIDE & GROOM',
    anchorId: 'bride-and-groom',
  },
  {
    text: 'WEDDING PARTY',
    anchorId: 'wedding-party',
  },
  {
    text: 'THE DAY OF',
    anchorId: 'the-day-of',
  },
  {
    text: 'PHOTOS',
    anchorId: 'photos',
  }
];

export function HeaderNavScrollableAnchor({ text, anchorId }) {
  return (
    <li
      className="nav-item"
    >
      <Link
        activeClass="active"
        className="nav-item-anchor"
        to={anchorId}
        spy={true}
        smooth={true}
        duration={500}
        isDynamic={true}
      >
        {text}
      </Link>
    </li>

  );
}

class Nav extends Component {

  onRsvpClick(evt) {
    evt.preventDefault();
    this.props.dispatch(showRsvpPasscodeModal());
  }

  render() {
    return (
      <nav className="nav">
        <ul className="nav-item-container max-width">
          <li className="nav-item home">
            <a href="/">
              <img src={logo} className="logo" alt="logo for bride and groom" />
            </a>
          </li>

          {
            SCROLLABLE_HEADER_NAV_ANCHORS.map((anchor, index) => {
              return (
                <HeaderNavScrollableAnchor
                  text={anchor.text}
                  anchorId={anchor.anchorId}
                  key={index}
                />
              );
            })
          }

          <li
            className="nav-item"
            onClick={this.onRsvpClick.bind(this)}
          >
            <a href="#">
              RSVP
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

Nav = connect()(Nav);

export default Nav;
