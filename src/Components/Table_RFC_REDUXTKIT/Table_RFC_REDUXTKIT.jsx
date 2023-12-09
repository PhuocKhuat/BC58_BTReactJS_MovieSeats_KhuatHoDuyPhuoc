import React from "react";
import { useSelector } from "react-redux";

export default function Table_RFC_REDUXTKIT() {
  let tableList = useSelector((state) => state.MovieSlice.danhSachGheDangDat);
  // console.log(tableList);
  let renderTable = () =>
    tableList.map((info, index) => (
      <tr key={index} style={{fontSize: "20px"}}>
        <td>{index + 1}</td>
        <td>{info.soGhe}</td>
        <td>{info.gia}</td>
        <td>
          <i className="fa fa-times text-danger" style={{cursor: "pointer"}}></i>
        </td>
      </tr>
    ));
  return (
    <div className="col-4">
      <h4 className="text-success mb-4 fs-3" style={{ width: "120%" }}>
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
            <th className="text-success">Price</th>
            <th className="text-danger">Action</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
}
