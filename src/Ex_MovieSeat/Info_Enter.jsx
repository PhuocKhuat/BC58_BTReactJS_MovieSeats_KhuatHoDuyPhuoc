import React, { Component } from 'react'

export default class Info_Enter extends Component {
  render() {
    return (
      <div>
        <h4 className='text-warning'>Fill The Required Details Below And Select Your Seats</h4>
        <div className="align d-flex">
          <div className="align-left d-flex flex-column me-4 mb-4">
            <label htmlFor="" className='text-white fw-bold fs-5'>
              Name
            </label>
            <input type="text" required className='inputText'/>
          </div>
          <div className="align-right d-flex flex-column">
            <label htmlFor="" className='text-white fw-bold
            fs-5'>Number of Seats</label>
            <input type="number" required min={1} className='inputNumber'/>
          </div>
        </div>
        <button className="btn btn-light startSelect">Start Selecting</button>
        
      </div>
    )
  }
}
