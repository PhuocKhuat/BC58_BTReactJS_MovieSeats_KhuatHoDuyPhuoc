import React, { Component } from "react";
import bgMovie from "./img/bgmovie.jpg";
// import Info_Enter from "./Info_Enter";
import List_Seat from "./List_Seat";
import Result_Selection from "./Result_Selection";
import "./style.css";

export default class Ex_MovieSeat extends Component {
  render() {
    return (
      <div style={{ backgroundImage: `url(${bgMovie})` }} className="bgMovie">
        <div className="blurClass">
        <h1 className="pt-3 pb-3 text-primary">BOOKING MOVIE TICKETS</h1>
        <div className="container">
          <div className="p-5 row">
            {/* <Info_Enter /> */}
            <List_Seat />
            <Result_Selection />
          </div>
          </div>
        </div>
      </div>
    );
  }
}
