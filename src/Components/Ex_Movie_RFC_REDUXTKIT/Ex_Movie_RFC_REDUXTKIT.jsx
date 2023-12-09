import React from 'react'
import ListSeat_RFC_REDUXTKIT from '../ListSeat_RFC_REDUXTKIT/ListSeat_RFC_REDUXTKIT'
import Table_RFC_REDUXTKIT from '../Table_RFC_REDUXTKIT/Table_RFC_REDUXTKIT'
import bgMovie from "../../img/bgmovie.jpg"
import "./style.css"

export default function Ex_Movie_RFC_REDUXTKIT() {
  return (
    <div style={{backgroundImage: `url(${bgMovie})`}} className='bgMovie'>
      <div className='blurClass'>
      <h1 className='pt-4 pb-3 text-primary'>BOOKING MOVIE TICKETS</h1>
      <div className="container">
        <div className="row p-5">
        <ListSeat_RFC_REDUXTKIT/>
        <Table_RFC_REDUXTKIT/>
        </div>
      </div>
      </div>
    </div>
  )
}
