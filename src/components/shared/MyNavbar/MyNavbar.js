import React from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';

import './MyNavbar.scss';

class MyNavbar extends React.Component {
  logOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    return (
      <div className="MyNavbar">
        <h1>MyNavbar</h1>
        <button className="btn btn-primary" onClick={this.logOut}>Logout</button>
      </div>
    );
  }
}

export default MyNavbar;