import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGheDangDat } from "../MovieSlice/MovieSlice";

export default function Seat_RFC_REDUXTKIT({ hangGhe, viTriHangGhe }) {
  let gheDangDat = useSelector((state) => state.MovieSlice.danhSachGheDangDat);
  // console.log(gheDangDat);
  // console.log(viTriHangGhe);
  let dispatch = useDispatch();
  let renderGhe = () => {
    //Nhớ return.
   return hangGhe.danhSachGhe.map((ghe, index) => {
    // console.log(soGhe);
      //GHẾ ĐÃ ĐẶT.
      let cssGheDaDat = "";
      //disabled là không được chọn mà là false, nghĩa là được chọn.
      let disabled = false;
      if (ghe.daDat) {
        //Gán css kiểu mới.
        cssGheDaDat = "gheDuocChon";
        //Không được chọn mà đúng là được chọn.
        disabled = true;
      }
      //GHẾ ĐANG ĐẶT.
      let cssGheDangDat = "";
      //Tìm vị trí khi ấn để ô ghế hiện ở table.
      let indexGheDangChon = gheDangDat.findIndex(
        (gheDangChon) => gheDangChon.soGhe === ghe.soGhe
      );
      if (indexGheDangChon !== -1) {
        cssGheDangDat = "gheDangChon";
      }
      return (
        <button
          key={index}
          className={`vienGhe ${cssGheDaDat}${cssGheDangDat}`}
          disabled={disabled}
          onClick={()=>{dispatch(setGheDangDat(ghe))}}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };
  let renderHangDauTien = () =>
    hangGhe.danhSachGhe.map((ghe, index) =>
      <span className="rowNumber" key={index}>
        {ghe.soGhe}
      </span>
    )
  let renderHangGhe = () =>{
    // Nếu vị trí hàng đầu tiên là 0 thì sẽ render ra đúng hàng đầu tiên.
    if(viTriHangGhe === 0){
      return (<div>
        {renderHangDauTien()}
        {/* {console.log(renderHangDauTien())} */}
      </div>)
    } else{
      return (<div>
        {hangGhe.hang}
        {renderGhe()}
        {/* {console.log(renderGhe())} */}
      </div>)
    }
  }

  return <div className="text-light fs-4">
    {renderHangGhe()}
  </div>;
}
