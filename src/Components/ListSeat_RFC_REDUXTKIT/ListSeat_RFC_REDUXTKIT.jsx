import React from "react";
import { useSelector } from "react-redux";
import Seat_RFC_REDUXTKIT from "../Seat_RFC_REDUXTKIT.jsx/Seat_RFC_REDUXTKIT";

export default function ListSeat_RFC_REDUXTKIT() {
  //Tượng tự mapStateToProps lấy data đưa lên layout.
  let seatList = useSelector((state) => state.MovieSlice.seatArr);
  // console.log(seatList);
  return (
    <div className="col-8">
      <h5 className="mb-4 text-warning fs-3" style={{ marginRight: "-24px" }}>
        MOVIE SEAT SELECTION
      </h5>
      <div className="d-flex justify-content-center mb-4">
        <div className="screen"></div>
      </div>
      <div>
        {seatList.map((hangGhe, index) => (
          <div key={index}>
            <Seat_RFC_REDUXTKIT hangGhe={hangGhe} soHangGhe={index} />
          </div>
        ))}
      </div>
    </div>
  );
}
