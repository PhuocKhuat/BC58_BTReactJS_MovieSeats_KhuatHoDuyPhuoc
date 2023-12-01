import React, { Component } from "react";
import { connect } from "react-redux";
import Seat from "./Seat";

class List_Seat extends Component {
  render() {
    let { movieSeatArr} = this.props;
    return (
      <div className="col-8">
        <h5 className="mb-4 text-warning fs-3" style={{ marginRight: "-24px" }}>
          MOVIE SEAT SELECTION
        </h5>
        <div className="d-flex justify-content-center mb-4">
          <div className="screen"></div>
        </div>
        <div>
          {movieSeatArr.map((item, index) => <div key={index}>
            <Seat data={item} soHangGhe={index}/>
          </div>)}
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    movieSeatArr: state.movieSeatArr,
  };
};


export default connect(mapStateToProps)(List_Seat);
