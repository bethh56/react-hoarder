import React from 'react';

import { Link } from 'react-router-dom';

import './Home.scss';

class Home extends React.Component {
  editEvent = (e) => {
    e.preventDefault();
    const editId = 'asdhjkf';
    this.props.history.push(`/edit/${editId}`);
  }

  render() {
    return (
      <div className="Home">
        <h1>Home</h1>
        <button className="btn btn-primary" onClick={this.editEvent}>Edit</button>
        <Link to='/single/sdfhjkal'> View Single </Link>
        <Link to='/new'> View New </Link>
      </div>
    );
  }
}

export default Home;
