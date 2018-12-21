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

  handleLogIn = (event) => {
    event.preventDefault();
    console.log("login clicked!");
    // this.setState({loggedIn: true});

    // Could also have handleLogIn not be an arrow function
    // and instead .bind(this) in the onClick call

    axios.post('/login', {
      username: 'admin',
      password: 'password'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    if (this.state.loggedIn) {
      return (<h1>You are logged in! Enjoy the application!</h1>);
    }
    else {
      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>All Users Test</h2>
            <br />
            <a href="/allusers">All Users</a>
            <br />
          </div>
          <br />
          <button onClick={this.handleLogIn}>Log In</button>
          <br />
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      );
    }
  }
}

export default App;
