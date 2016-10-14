import React, { Component } from 'react';
import Scroll from 'react-scroll';
import '../../stylesheets/components/nav.css';

import logo from '../../images/logo.png';

const Link = Scroll.Link;

const HEADER_NAV_ANCHORS = [
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
  },
  {
    text: 'RSVP',
    anchorId: 'rsvp',
  }
];

export function HeaderNavAnchor({ text, anchorId, onClick }) {
  return (
    <li
      className="nav-item"
      onClick={onClick}
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

export function HeaderNavLogo() {
  return (
    <li className="nav-item home">
      <a href="/">
        <img src={logo} className="logo" alt="logo for bride and groom" />
      </a>
    </li>
  );
}

class Nav extends Component {
  onHeaderAnchorClick() {
    // Scroll
  }

  render() {
    return (
      <nav className="nav">
        <ul className="nav-item-container max-width">
          <HeaderNavLogo />
          {
            HEADER_NAV_ANCHORS.map((anchor, index) => {
              return (
                <HeaderNavAnchor
                  text={anchor.text}
                  anchorId={anchor.anchorId}
                  onClick={this.onHeaderAnchorClick}
                  key={index}
                />
              );
            })
          }
        </ul>
      </nav>
    );
  }
}



export default Nav;
