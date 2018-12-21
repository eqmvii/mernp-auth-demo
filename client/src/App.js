import React, { Component } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    loggedIn: false,
    users: []
  }

  componentDidMount() {
    console.log("componentDidMount lifecycle method called");
    this.getAllUsers();
  }

  getAllUsers() {
    axios.get("/allusers")
      .then(res => {
        console.log("Found these users: ");
        console.log(res.data);
        this.setState({users: res.data});
      })
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.loggedIn) {
      return (<h1>You are logged in!</h1>);
    }
    else {
      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>All Users Test</h2>
            <a href="/allusers">All Users</a>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      );
    }
  }
}

export default App;
