import { movieSeatArr } from "../data"

const initialState = {
    movieSeatArr : movieSeatArr,
    listChairs: [],
    WarnSelectSeats: "",
    selectSeats: 123,
    confirmSelect: "",
}

export let movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  default:
    return state
  }
}
