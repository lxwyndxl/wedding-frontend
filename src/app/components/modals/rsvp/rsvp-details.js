import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import '../../../../stylesheets/components/modals/rsvp/rsvp-details.css';

import {
  updateAttendingDay,
  updateNote,
  updateVegi
} from '../../../actions/rsvp-details';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';

import friday from '../../../../images/rsvp/friday.png';
import saturday from '../../../../images/rsvp/saturday.png';
import sunday from '../../../../images/rsvp/sunday.png';

export function DaySelection({ day, image, hasLodging, onCheck }) {
  return (
    <div className={cx('rsvp-day-section', {'checked': hasLodging})}>
      <label className="rsvp-day-image-wrapper" htmlFor={day}>
        <img src={image} className="rsvp-day" alt={day} />
      </label>
      <div className="attendee-staying">
        <Checkbox
          defaultChecked={hasLodging}
          onCheck={onCheck}
          name={day}
          id={day}
        />
      </div>
    </div>
  );
}

class RsvpDetails extends Component {
  constructor(props) {
    super(props);
    this.onDayCheck = this.onDayCheck.bind(this);
    this.onNoteChange = this.onNoteChange.bind(this);
    this.onVegiChange = this.onVegiChange.bind(this);
    this.dispatch = props.dispatch;
  }

  onDayCheck(evt, isInputChecked) {
    const day = evt.target.name;
    this.dispatch(updateAttendingDay(day, isInputChecked));
  }

  onNoteChange(evt, text) {
    this.dispatch(updateNote(text));
  }

  onVegiChange(evt, key, payload) {
    this.dispatch(updateVegi(payload));
  }

  render() {
    const {
      tier,
      notes,
      lodging_friday,
      lodging_saturday,
      lodging_sunday,
      vegi,
    } = this.props.userGroup;

    const { users } = this.props;

    const items = [];

    for (let i = 0; i <= users.length; i++ ) {
      items.push(
        <MenuItem
          value={i}
          key={i}
          primaryText={`${i}`}
        />
      );
    }

    return (
      <section className="rsvp-details">
        <h2>Tell us about your stay.</h2>

        <div className="meal-preferences">
          <p className="details-prompt">How many vegans / vegetarians?</p>
          <div className="meal-preferences-dropdown">
            <DropDownMenu
              maxHeight={280}
              value={vegi || 0}
              onChange={this.onVegiChange}
            >
              {items}
            </DropDownMenu>
          </div>
        </div>

        <div className="overnight-preferences">
          <p className="details-prompt">Our wedding is a desintation wedding.</p>
          <p className="details-prompt">Which nights will your party stay?</p>
          <div className="overnight-preferences-checkboxes">
            {
              tier === 0 &&
              <DaySelection
                day="friday"
                image={friday}
                hasLodging={lodging_friday}
                onCheck={this.onDayCheck}
              />
            }

            <DaySelection
              day="saturday"
              image={saturday}
              hasLodging={lodging_saturday}
              onCheck={this.onDayCheck}
            />

            <DaySelection
              day="sunday"
              image={sunday}
              hasLodging={lodging_sunday}
              onCheck={this.onDayCheck}
            />
          </div>
        </div>

        <div className="extra-preferences">
          <p className="details-prompt">Anything else we should know?</p>
          <div className="extra-preferences-textarea">
            <TextField
              hintText="Leave us a note"
              fullWidth={true}
              multiLine={true}
              rows={1}
              rowsMax={4}
              defaultValue={notes}
              onChange={this.onNoteChange}
            />
          </div>
        </div>
      </section>
    );
  }
}

RsvpDetails.propTypes = {
  userGroup: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
};

RsvpDetails = connect()(RsvpDetails);

export default RsvpDetails;
