import React, { Component } from 'react';
import logo from './logo.svg';
import logo_qa from './logo_qa.png';
import profileimage from './profileimage.jpg';
import './App.css';
import { BrowserRouter as Router, Route, NavLink ,Link} from "react-router-dom";

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      username : 'John',
    }
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">


            <div className="grid-container">
              <div className="item1">
                <div>
                  <img style={{ width: '80px', height: '80px' }} src={logo_qa} alt="Logo" />
                  <div className='titlebutton'>
                    <h1> Room Booking System </h1>
                  </div>
                </div>
              </div>

              <div className="item6">
                <Link to={ '' + this.state.username + '_account_settings'}>{this.state.username}
                  </Link>
                <br />
                <br />
                <img style={{ width: '100px', height: '100px' }} src={profileimage} alt="Logo" />
                <br />
                <button>
                  Logout
                  </button>
              </div>

              <div className="item2">
                <div className="topnav">
                  <NavLink to="/Home">Home</NavLink>
                  <NavLink to="/CheckRooms">Check Rooms</NavLink>
                  <NavLink to="/Floor4">Floor 4</NavLink>
                  <NavLink to="/Floor5">Floor 5</NavLink>
                </div>
              </div>

              <div className="item3">
                <p>
                  Main
                    </p>
              </div>

              <div className="item5">
                <p>
                  Bottomwdadawd
                  aw
                  daw
                  dawdaw
                  dawdaw
                  d
                  awd
                  d
                  awdawd
                  awdawdawd
                  awd
                    </p>
              </div>


              <Route exact path="/Home" />
              <Route exact path="/CheckRooms" />
              <Route exact path="/Floor4" />
              <Route exact path="/Floor5" />
            </div>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
