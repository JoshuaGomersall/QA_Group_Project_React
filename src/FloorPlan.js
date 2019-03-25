import React, { Component } from 'react';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      floornumber: ' 4',
    };
  }

  render() {
    return (
      <div className="App">
        <br/><br/>
        <h2>Welcome</h2>

        <h3>
          This Is The Page For Floor 
          {this.state.floornumber}
          </h3>

        <br /><br />
      </div>
    );
  }
}

export default App;