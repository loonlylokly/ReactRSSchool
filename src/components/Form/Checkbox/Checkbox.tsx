import React from 'react';

class Checkbox extends React.Component {
  render() {
    return (
      <div className="checkbox">
        <input type="checkbox" id="special" value="newsletter" />
        <label htmlFor="special">There is a special offer for the product</label>
      </div>
    );
  }
}

export default Checkbox;
