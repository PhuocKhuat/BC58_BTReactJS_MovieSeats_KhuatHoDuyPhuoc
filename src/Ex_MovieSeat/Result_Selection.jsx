import React, { Component } from "react";
import { connect } from "react-redux";
import { huyGheAction } from "./actions/actions";

class Result_Selection extends Component {
  render() {
    let {listChairs, handleRemoveChair} = this.props;
    return (
      <div className="col-4">
        <h4 className="text-success mb-4 fs-3" style={{width: "120%"}}>
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
        <table className="bg-white mt-4 table" border="2" style={{width: "145%"}}>
          <thead>
            <tr style={{fontSize: "25px"}}>
              <th className="text-warning">Index</th>
              <th className="text-primary">Number of Seats</th>
              <th className="text-success">Prices</th>
              <th className="text-danger">Delete</th>
            </tr>
          </thead>
          <tbody>
            {listChairs.map((soGhe, index) => 
              <tr key={index} style={{fontSize: "20px"}}>
                <td>{index}</td>
                <td>{soGhe.soGhe}</td>
                <td>{soGhe.gia}</td>
                <td><i className="fa fa-times text-danger" onClick={()=>{handleRemoveChair(soGhe)}} style={{cursor: "pointer"}}></i></td>
              </tr>
              )}
          </tbody>
        </table>
      </div>
    );
  }
}

let mapStateToProps = (state) =>{
   return{
    listChairs: state.danhSachGheDangDat,
   }
}

let mapDispatchToProps = (dispatch) =>{
  return{
    handleRemoveChair: (soGhe) =>{
      dispatch(huyGheAction(soGhe));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Result_Selection);