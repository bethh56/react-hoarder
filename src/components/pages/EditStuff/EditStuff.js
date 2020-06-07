import React from 'react';

import './EditStuff.scss';

class EditStuff extends React.Component {
  render() {
    const editId = this.props.match.params.stuffId;
    return (
      <div className="EditStuff">
        <h1>Edit Stuff</h1>
        <h2>Edit Id {editId}</h2>
      </div>
    );
  }
}

export default EditStuff;
