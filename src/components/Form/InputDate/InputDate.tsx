import React from 'react';

class InputDate extends React.Component {
  render() {
    return (
      <div className="checkbox">
        <label htmlFor="date">Date of product appearance</label>
        <input type="date" id="date" />
      </div>
    );
  }
}

export default InputDate;
