import React, { Component } from 'react';
import './App.css';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loginstate: '1',
      signupstate: '0',
      errormessage: '',
    }

    this.loginvalidate = () => {


      {
        this.setState({
          errormessage: 'Invalid Email'
        });
      }
      
      {
        this.setState({
        errormessage: 'Invalid Password'
        });
      }
      {
        this.setState({
          errormessage: ''
        });
      }
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
            <br />
            <button className={'loginButton' + this.state.loginstate} onClick={this.loginpage}>
              Login
          </button>
            <button className={'loginButton' + this.state.signupstate} onClick={this.signuppage}>
              SignUp
          </button>
          </div>

          <div className={"login" + this.state.loginstate}>
            <br />
            Email
            <input />
            Password
            <input />
            <br />
            <div className="invalid">
              {this.state.errormessage}
            </div>
            <br />
            <button onClick={this.loginvalidate}>
              Login
            </button>
            <br />
          </div>

          <div className={"signup" + this.state.signupstate}>
            Email
            <input placeholder="example@example.qa.com" />
            Forename
            <input />
            Surname
            <input />
            Password
            <input />
            Confirm Password
            <input />
            <br />
            <button>
              SignUp
            </button>
            <br />

          </div>


        </header>
      </div>
    );
  }
}

export default App;