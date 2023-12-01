import { movieSeatArr } from "../data"
import { ADD, DELETE } from "../types/contains"

const initialState = {
    movieSeatArr : movieSeatArr,
    danhSachGheDangDat : [],
}

export let movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case ADD:{
    let cloneList = [...state.danhSachGheDangDat];
    // let cssGheDangChon = '';
    let index = cloneList.findIndex(gheDangDat => gheDangDat.soGhe === payload.soGhe);
    if(index === -1){ //Chưa có ghế trong mảng.
      cloneList.push(payload);
    } else{ //Đã có thì tìm vị trí và xoá đi 1.
       cloneList.splice(index, 1);      
    }
    //Update lại mảng.
    state.danhSachGheDangDat = cloneList;
    //render lại, chức năng giống setState.
    return {...state};
  }
  case DELETE:{
    let xoaGhe = state.danhSachGheDangDat.filter(ghe => ghe.soGhe !== payload.soGhe);
    return {...state, danhSachGheDangDat: xoaGhe};
  }
  default:
    return state
  }
}
