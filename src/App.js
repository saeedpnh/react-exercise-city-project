import React from "react";
import "./app.scss";
import Navbar from "./components/Navbar/Navbar";
import TourList from "./components/TourList";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <TourList />
    </React.Fragment>
  );
}

export default App;
