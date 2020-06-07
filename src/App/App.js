import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import './App.scss';

import MyNavbar from '../components/shared/MyNavbar/MyNavbar';
import Auth from '../components/pages/Auth/Auth';

import fbConnection from '../helpers/connection';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    return (
      <div className="App">
        <MyNavbar />
        <h2>INSIDE APP COMPONENT</h2>
        <Auth />
      </div>
    );
  }
}

export default App;
