import { ADD, DELETE } from "../types/contains"

export const datGheAction = (soGhe) =>{
   return {
    type: ADD,
    payload: soGhe,
  }
}

export const huyGheAction = (soGhe) =>{
  return{
    type: DELETE,
    payload: soGhe,
  }
}