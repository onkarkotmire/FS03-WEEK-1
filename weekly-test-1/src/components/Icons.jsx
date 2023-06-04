import React from 'react'
import './Icons.css'

export default function Icons() {
  return (
    <div className='icon-box'>
       <div className="box1">
       <i class="fa-solid fa-trophy" id="icon"></i>
        <h1>22</h1>
        <h3>Award Winning</h3>
      </div>
      <div className="box1">
      <i class="fa-sharp fa-solid fa-briefcase" id="icon"></i>
        <h1>145</h1>
        <h3>Finished Projects</h3>
      </div>
      <div className="box1">
      <i class="fa-sharp fa-solid fa-car" id="icon"></i>
        <h1>349</h1>
        <h3>Products Sold</h3>
      </div>
    </div>
  )
}
