import React from 'react';

class FileUpload extends React.Component {
  render() {
    return (
      <div className="checkbox">
        <label htmlFor="avatar">Choose a profile picture:</label>
        <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
      </div>
    );
  }
}

export default FileUpload;
