import React from 'react'
import "./Advantage.css"
function Advantage() {
  return (
    <div className="main_container">
        <div className="header_section">
         <h1>MUSIC MASTER Advantage</h1>
        </div>
        <div className="about_advantage">
            <div className="div1">
                <img src="https://musicmaster.in/public/images/advantage/Customize.webp" alt="" />
                <h3>Customised Learning</h3>
                <p>Learn to play your favourite songs, be it classical or film, the choice is yours.</p>
            </div>
            <div className="div2">
                <img src="https://musicmaster.in/public/images/advantage/verified.webp" alt="" />
                <h3>100% Verified Tutors</h3>
                <p>Learn from tutors who love teaching.</p>
            </div>
            <div className="div3">
                <img src="https://musicmaster.in/public/images/advantage/comfort.webp" alt="" />
                <h3>Convenience</h3>
                <p>No travel, go at your own pace. All at the comfort of your home.</p>
            </div>
        </div>
    </div>
  )
}

export default Advantage