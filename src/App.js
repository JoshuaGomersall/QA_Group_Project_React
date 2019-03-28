import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar'
import Login from "./Login"

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedin: '0',
    };

    this.changeToMain = () => {
      this.setState({
        loggedin:1,
      });
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.changeToMain}>Login</button>

        <div className={"logindis" + this.state.loggedin}>
        <Login/>
        </div>
        <div className={"navBardis" + this.state.loggedin}>
        <NavBar />
        </div>
        </div>
        )
    }
  }

export default App;
