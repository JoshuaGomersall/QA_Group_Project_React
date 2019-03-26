import React, { Component } from 'react';
import './App.css';
import logo_qa from "./logo_qa.png";
import ImageMapper from 'react-image-mapper';


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

<div className="image">
    <ImageMapper src={logo_qa} width={150} imgWidth={150}/>
</div>

        <br /><br />
      </div>
    );
  }
}

export default App;