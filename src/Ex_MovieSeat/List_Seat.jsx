import React, { Component } from "react";
import { connect } from "react-redux";

class List_Seat extends Component {
  render() {
    let { movieSeatArr, handleAddChairs } = this.props;
    return (
      <div className="col-8">
        <h5 className="mb-4 text-warning fs-3" style={{ marginRight: "100px" }}>
          MOVIE SEAT SELECTION
        </h5>
        <div className="d-flex justify-content-center mb-4">
          <div className="screen"></div>
        </div>
        <table className="fw-bold">
          <tbody>
            {movieSeatArr.map((item) => (
              <tr>
                <td className="text-secondary" style={{fontSize: "25px"}}> 
                {item.hang}</td>
                <td>
                  {item.danhSachGhe.map((items) => (
                    <input
                      type="checkbox"
                      className="seats"
                      value={items.soGhe}
                      onClick={()=>{handleAddChairs(items)}}
                    />
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    movieSeatArr: state.movieSeatArr,
  };
};

let mapDispatchToProps = (dispatch) =>{
  return {
    handleAddChairs: (chairs)=>{
      let action = {
        type: "ADD",
        payload: chairs,
      }
      dispatch(action);
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(List_Seat);
