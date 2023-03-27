import React from 'react';

class Radio extends React.Component {
  render() {
    return (
      <div className="radio">
        <input type="radio" id="not-availability" name="availability" value="NotAvailability" />
        <label htmlFor="contactChoice2">Not availability</label>
      </div>
    );
  }
}

export default Radio;
