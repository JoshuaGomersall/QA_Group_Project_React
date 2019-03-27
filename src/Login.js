import React, { Component } from 'react';
import './App.css';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loginstate: '1',
      signupstate: '0',
    }

    this.loginpage = () => {
      console.log("loginpage");
      this.setState({
        loginstate: 1,
        signupstate: 0,
      });
    }

    this.signuppage = () => {
      console.log("signuppage");
      this.setState({
        loginstate: 0,
        signupstate: 1,
      });
    }
  }




  render() {
    return (
      <div className="App">
        <header className="App-header">

          <div>
            <button className={'loginButton' + this.state.loginstate} onClick={this.loginpage}>
              Login
          </button>
            <button className={'loginButton' + this.state.signupstate} onClick={this.signuppage}>
              SignUp
          </button>
          </div>

          <div className={"login" + this.state.loginstate}>
            Email
            <input />
            <br />
            Password
            <input />
            <br />
            <button>
            Login
            </button>
            <br/>
          </div>

          <div className={"signup" + this.state.signupstate}>
            Email
            <input />
            <br />
            Forename
            <input />
            <br />
            Surname
            <input />
            <br />
            Password
            <input />

            <br />
            Confirm Password
            <input />
            <br />

            <button>
            SignUp
            </button>
            <br/>

          </div>


        </header>
      </div>
    );
  }
}

export default App;