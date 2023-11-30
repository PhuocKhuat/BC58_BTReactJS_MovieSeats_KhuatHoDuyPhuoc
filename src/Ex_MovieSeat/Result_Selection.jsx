import React, { Component } from "react";
import { connect } from "react-redux";

class Result_Selection extends Component {
  render() {
    let {listChairs} = this.props;
    return (
      <div className="col-4">
        <h4 className="text-success mb-4 fs-3">
          LIST OF SEATS YOU HAVE SELECTED
        </h4>
        <div className="list-seat">
          <button className="gheDuocChon"></button>
          <span className="text-light">Selected Seat</span>
          <button className="gheDangChon"></button>
          <span className="text-light">Reserved Seat</span>
          <button className="gheTrong"></button>
          <span className="text-light">Empty Seat</span>
        </div>
        <table className="bg-white mt-4 table" border="2">
          <thead>
            <tr style={{fontSize: "20px"}}>
              <th>Number of Seats</th>
              <th>Prices</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {listChairs.map(item => 
              <tr>
                <td>{item.soGhe}</td>
                <td>{item.gia}</td>
                <td></td>
              </tr>)}
          </tbody>
        </table>
      </div>
    );
  }
}

let mapStateToProps = (state) =>{
   return{
    listChairs: state.listChairs,
   }
}

export default connect(mapStateToProps)(Result_Selection);