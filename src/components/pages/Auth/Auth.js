import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import './Auth.scss';

class Auth extends React.Component {
  login = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  render() {
    return (
      <div>
        <button className="btn btn-dark m-2 p-3" onClick={this.login}>Google Login</button>
      </div>
    );
  }
}

export default Auth;
