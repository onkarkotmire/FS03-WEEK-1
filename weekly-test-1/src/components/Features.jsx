import React from 'react'
import './Features.css'

export default function Features() {
  return (
    <div style={{marginTop:"10px", width:"100vw", height: "70vh", display: "flex", flexDirection:"column", gap:"20px"}} >
     <h1>Our Features</h1>
      <div className="lower-box" >
      <div className="box">
        <img src="https://png.pngtree.com/element_our/png_detail/20181113/rocket-launch-logo-icon-design-template-vector-illustration-png_236653.jpg" alt="" />
        <h3>Fully Responsive</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ad officia distinctio veniam sequi, saepe praesentium nostrum sed explicabo aliquid.</p>
        <a href="#" style={{textDecoration:"none"}}>Read More</a>
      </div>
      <div className="box">
      <img src="https://cdn-icons-png.flaticon.com/512/7238/7238706.png" alt="" />
        <h3>Trusted Author</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae itaque eaque maxime doloremque ad sit quod optio voluptate. Iusto, doloremque.</p>
        <a href="#" style={{textDecoration:"none"}}>Read More</a>
      </div>
      <div className="box">
      <img src="https://www.pngkey.com/png/full/126-1268354_community-student-icon-graduate-icon.png" alt="" />
        <h3>Reusbale Elements</h3>
        <p>Lorem ipsum dolor, sit amet adipisicing elit. Id natus doloremque quo inventore ad est repellendus eum temporibus fugit dolorem?</p>
        <a href="#" style={{textDecoration:"none"}}>Read More</a>
      </div>
      </div>
    </div>
  )
}
