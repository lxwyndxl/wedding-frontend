import React, { Component } from 'react';
import '../../stylesheets/components/bridesmaids.css';

import bridesmaids from '../../images/bridesmaids.png';
import vanessa from '../../images/bridesmaids/vanessa.png';
import angie from '../../images/bridesmaids/angie.png';
import hanna from '../../images/bridesmaids/hanna.png';
import meeka from '../../images/bridesmaids/meeka.png';
import shwetha from '../../images/bridesmaids/shwetha.png';
import sophia from '../../images/bridesmaids/sophia.png';
import stephanie from '../../images/bridesmaids/stephanie.png';

const BRIDESMAIDS = [
  {
    fullName: 'Vanessa Wong',
    image: vanessa,
    isMaidOfHonor: true,
  },
  {
    fullName: 'Angie Huang',
    image: angie,
  },
  {
    fullName: 'Hanna Hoang',
    image: hanna,
  },
  {
    fullName: 'Meeka Gandhi',
    image: meeka,
  },
  {
    fullName: 'Shwetha Kotekar',
    image: shwetha,
  },
  {
    fullName: 'Sophia Han',
    image: sophia,
  },
  {
    fullName: 'Stephanie Chou',
    image: stephanie,
  }
];

export function Headshot({ fullName, image, isMaidOfHonor }) {
  const bridesmaidClass = isMaidOfHonor ? 'bridesmaid mod' : 'bridesmaid';

  return (
    <li className={bridesmaidClass}>
      <img src={image} className="bridesmaid-headshot" alt={fullName} />
      <p classNames="bridesmaid-name">{fullName}</p>
      {isMaidOfHonor && <p className="maid-of-honor">Maid of Honor</p>}
    </li>
  );
};

class Bridesmaids extends Component {
  render() {
    return (
      <section className="bridesmaids">
        <header>
          <h1 className="bridesmaids-welcome">Meet the bridesmaids</h1>
          <img src={bridesmaids} className="bridesmaids-image" alt="bridesmaids group"/>
        </header>
        <ul className="bridesmaids-headshots">
          {
            BRIDESMAIDS.map((bridesmaid, index) => {
              return (
                <Headshot
                  fullName={bridesmaid.fullName}
                  image={bridesmaid.image}
                  isMaidOfHonor={bridesmaid.isMaidOfHonor}
                  key={index}
                />
              );
            })
          }
        </ul>
      </section>
    );
  }
}

export default Bridesmaids;
