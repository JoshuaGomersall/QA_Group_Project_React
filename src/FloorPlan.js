import React, { Component } from 'react';
import './App.css';
import logo_qa from "./logo_qa.png";
import ImageMapper from 'react-image-mapper';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      floornumber: ' 4',
      name:"my-map",
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
    <ImageMapper src={logo_qa} width={150} imgWidth={150}
    	onClick={area => this.clicked(area)}
    	onMouseEnter={area => this.enterArea(area)}
    	onMouseLeave={area => this.leaveArea(area)}
    	onMouseMove={(area, _, evt) => this.moveOnArea(area, evt)}
    	onImageClick={evt => this.clickedOutside(evt)}
    	onImageMouseMove={evt => this.moveOnImage(evt)}
    />
    {
    	this.state.hoveredArea &&
    	<span className="tooltip"
    	    style={{ ...this.getTipPosition(this.state.hoveredArea)}}>
    		{ this.state.hoveredArea && this.state.hoveredArea.name}
    	</span>
    }
</div>

        <br /><br />
      </div>
    );
  }
}

export default App;