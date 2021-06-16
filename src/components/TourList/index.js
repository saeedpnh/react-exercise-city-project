import React, { Component } from "react";
import Tour from "../Tour";
import "./tourlist.scss";
import { tourData } from "../../tourData";

class TourList extends Component {
  state = {
    tours: tourData,
  };

  removeTour = (id) => {
    // const { tours } = this.state;
    // const sorted = tours.filter((tours) => tours.id !== id);
    console.log(id);
    this.setState({
      // tours: sorted,
      tours: this.state.tours.filter((tours) => tours.id !== id),
    });
  };

  render() {
    const { tours } = this.state;
    return (
      <section className="tourlist">
        {tours.map((tour) => (
          <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
        ))}
      </section>
    );
  }
}

export default TourList;
