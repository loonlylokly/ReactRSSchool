import React from 'react';

class SelectOptions extends React.Component {
  render() {
    return (
      <div className="checkbox">
        <label htmlFor="type">Choose a type:</label>
        <select id="type" defaultValue="--Please choose an option--">
          <option value="Classic">Classic</option>
          <option value="Electric">Electric</option>
          <option value="Steam">Steam</option>
        </select>
      </div>
    );
  }
}

export default SelectOptions;
