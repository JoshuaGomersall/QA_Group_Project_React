import React, { Component } from 'react';
import logo_qa from './logo_qa.png';
import profileimage from './profileimage.jpg';
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import setMinutes from "date-fns/setMinutes";
import setHours from "date-fns/setHours";
import addMonths from "date-fns/setHours";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
    };
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
  }

  handleChange1(date) {
    console.log(date);
    let newDate = new Date();
    this.setState({
      startDate: date
    });
  }

  handleChange2(date) {
    let newDate = new Date();
    this.setState({
      endDate: date
    });
  }

  render() {
    return (
      <div className="App">
        <p>Start Of Booking</p>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange1}
          showTimeSelect
          timeIntervals={15}
          minDate={new Date()}
          minTime={new Date()}
          maxTime={setHours(setMinutes(new Date(), 45), 18)}
          dateFormat="MMMM d, yyyy h:mm aa"
        />

        <p>End Of Booking</p>
        <DatePicker
          selected={this.state.endDate}
          onChange={this.handleChange2}
          showTimeSelect
          timeIntervals={15}
          minDate={new Date()}
          minDate={this.state.startDate}
          maxDate={addMonths(this.state.startDate, 300)}
          minTime={this.state.startDate}
          maxTime={setHours(setMinutes(new Date(), 0), 19)}
          dateFormat="MMMM d, yyyy h:mm aa"
          showDisabledMonthNavigation
        />
        <br /><br />
      </div>
    );
  }
}

export default App;