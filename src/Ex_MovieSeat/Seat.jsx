import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.css";
import { datGheAction } from "./actions/actions";

class Seat extends Component {
  renderGhe = () =>
    this.props.data.danhSachGhe.map((soGhe, index) => {
      //TRẠNG THÁI GHẾ ĐÃ ĐẶT.
      let cssGheDaDat = "";
      let disabled = false; // disbale là không được chọn nhưng = false, có nghĩa là được chọn.
      if (soGhe.daDat) {
        //ghế đã chọn == true là đã chọn rồi.
        cssGheDaDat = "gheDuocChon"; //cách gán css màu đỏ mới.
        disabled = true;
      }
      //
      //TRẠNG THÁI GHẾ SẮP CHỌN.
      let cssGheDangChon = "";
      //Tìm vị trí số ghế trong listChairs
      let indexGheDangChon = this.props.listChairs.findIndex(
        (gheDangDat) => gheDangDat.soGhe === soGhe.soGhe
      );
      if (indexGheDangChon !== -1) {
        //Đang chọn ghế.
        cssGheDangChon = "gheDangChon";
      }
      //className là vienGhe nhưng những ghế là đã chọn thì mới hiện class gheDuocChon.
      return (
        <button
          className={`vienGhe ${cssGheDaDat}${cssGheDangChon}`}
          disabled={disabled}
          key={index}
          onClick={() => {
            this.props.handleAddChairs(soGhe);
          }}
        >
          {soGhe.soGhe}
        </button>
      );
    });

  renderHangDauTien = () =>
    this.props.data.danhSachGhe.map((soGhe, index) => (
      <span className="rowNumber" key={index}>
        {soGhe.soGhe}
      </span>
    ));

  renderHangGhe = () => {
    //Nếu vị trí hàng là 0.
    if (this.props.soHangGhe === 0) {
      //Trả về vị trí hàng đầu tiên là thẻ span.
      return <div>{this.renderHangDauTien()}</div>;
    } else {
      //Trả về hàng là ABC và ghế từ A1 đến A12 => J1 đến J12.
      return (
        <div>
          {this.props.data.hang}
          {this.renderGhe()}
        </div>
      );
    }
  };
  render() {
    return <div className="text-light fs-4">{this.renderHangGhe()}</div>;
  }
}

let mapStateToProps = (state) => {
  return {
    listChairs: state.danhSachGheDangDat,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    handleAddChairs: (soGhe) => {
      dispatch(datGheAction(soGhe));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Seat);
