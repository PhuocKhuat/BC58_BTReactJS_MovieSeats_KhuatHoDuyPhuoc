import React from 'react'
import { useSelector } from 'react-redux';

export default function Seat_RFC_REDUXTKIT({hangGhe, soHangGhe}) {
  let gheDangDat = useSelector(state => state.MovieSlice.danhSachGheDangDat);
  // console.log(gheDangDat);
  let renderGhe = () =>{
    hangGhe.danhSachGhe.map((soGhe, index) => {
      //GHẾ ĐÃ ĐẶT.
      let cssGheDaDat = "";
      //disabled là không được chọn mà là false, nghĩa là được chọn.
      let disabled = false;
      if(soGhe.daDat){
        //Gán css kiểu mới.
        cssGheDaDat = "gheDuocChon";
      //Không được chọn mà đúng là được chọn.
        disabled= true;
      }
      //GHẾ ĐANG ĐẶT.
      let cssGheDangDat = "";
      //Tìm vị trí khi ấn để ô ghế hiện ở table.
      let indexGheDangChon = gheDangDat.findIndex(gheDangChon => gheDangChon.soGhe === soGhe.soGhe);
      if(indexGheDangChon !== -1 ){
        cssGheDangDat = "gheDangChon";
      }
      return <button key={index}>

      </button>
    }
    ) 
  }
  return (
    <div>
      {renderGhe()}
    </div>
  )
}
