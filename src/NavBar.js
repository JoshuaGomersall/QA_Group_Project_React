import React, { Component } from 'react';
import logo_qa from './logo_qa.png';
import profileimage from './profileimage.jpg';
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import RoomBooking from "./RoomBooking";
import Home from "./Home";
import FloorPlan from "./FloorPlan";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: 'TestName',
      floornumber: ' 5',
    };
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <div className="grid-container">
              <div className="header">
                <div>
                  <br />
                  <img style={{ width: '80px', height: '80px' }} src={logo_qa} alt="Logo" />
                  <div className='titlebutton'>
                    <h1> Room Booking System </h1>
                  </div>
                </div>
              </div>

              <div className="profile">
                <h3>
                  <Link to={'' + this.state.username + '_account_settings'}>{this.state.username}
                  </Link>
                </h3>
                <img style={{ width: '7vh', height: '7vh' }} src={profileimage} alt="Logo" />
                <br />
                <button>
                  <NavLink to="/">Logout</NavLink>
                </button>
                <br />
                <br />
              </div>

              <div className="main">
                <Route exact path="/Home" component={Home} />
                <Route exact path="/CheckRooms" />
                <Route exact path="/Floor4" component={FloorPlan} floornumber={this.state.floornumber} />
                <Route exact path="/Floor5" />
                <Route exact path="/RoomBooking" component={RoomBooking} />
              </div>


              <div className="menu">
                <div className="topnav">
                  <NavLink to="/Home">Home</NavLink>
                  <NavLink to="/CheckRooms">Check Rooms</NavLink>
                  <NavLink to="/Floor4">Floor 4</NavLink>
                  <NavLink to="/Floor5">Floor 5</NavLink>
                  <NavLink to="/RoomBooking">Room Booking</NavLink>


                </div>
              </div>

            </div>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;