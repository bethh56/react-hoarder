import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import './App.scss';

import MyNavbar from '../components/shared/MyNavbar/MyNavbar';
import Auth from '../components/pages/Auth/Auth';
import MyStuff from '../components/pages/MyStuff/MyStuff';
import EditStuff from '../components/pages/EditStuff/EditStuff';
import NewStuff from '../components/pages/NewStuff/NewStuff';

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
        <MyStuff />
        <NewStuff />
        <EditStuff />
      </div>
    );
  }
}

export default App;
