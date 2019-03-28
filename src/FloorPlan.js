import React, { Component } from 'react';
import './App.css';
import ImageMapper from 'react-image-mapper';
import Floor_5 from "./Floor_5.PNG";
import RoomBooking from "./RoomBooking";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      floornumber: '',

      roomname: '',
      roomBookingVis:'1',
    };

    this.clicked = (e) => {
      this.setState({
        roomname:e.name,
      });
    }
  }

  render() {
    let MAP = {
      name: "my-map",
      areas: [
        { name: "Room2", shape: "poly", coords: [220, 150, 220, 10, 410, 10, 410, 150], preFillColor: "#", fillColor: "lightblue" },
        { name: "Room1", shape: "poly", coords: [20, 10, 20, 150, 220, 150, 220, 10], preFillColor: "#", fillColor: "lightblue" },
      ]
    }
    return (
      <div className="App">

        <div className={"floorPlan" +this.state.roomBookingVis}>
          <p>Welcome</p>
          This Is The Page For Floor
          {this.props.floornumber}
          <div className="imagecontainer">
            <ImageMapper src={Floor_5} map={MAP} width={1000}
              onClick={area => this.clicked(area)}
            />
            {
              this.state.hoveredArea &&
              <span className="tooltip"
                style={{ ...this.getTipPosition(this.state.hoveredArea) }}>
                {this.state.hoveredArea && this.state.hoveredArea.name}
              </span>
            }
          </div>
        <div className={"bookingForm" + this.state.roomBookingVis}>
        <RoomBooking roomname={this.state.roomname}/>
        </div>
        </div>
        </div>
    );
  }
}

export default App;