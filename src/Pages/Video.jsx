import React from "react";
import "./Video.css";
function Video() {
  return (
    <div className="video_main_container">
      <div className="video_header">
        <h1>Check Our Rockstars In Action</h1>
      </div>
      <div className="video">
        <div className="video1">
          <a href="https://www.instagram.com/p/CTejcKNjGUJ/" target="_blank">
            <img src="https://musicmaster.in/images/instagram/onlinevocallessons-musicmaster.in.webp" />
          </a>
        </div>
        <div className="video1">
          <a href="https://www.instagram.com/p/CS6n4xRl5La/" target="_blank">
            <img
              src="https://musicmaster.in/images/instagram/onlinepianolessons.musicmaster.in.webp"
              alt=""
            />
          </a>
        </div>
        <div className="video1">
          <a href="https://www.instagram.com/p/CZZLLIxhOeo/" target="_blank">
            <img
              src="https://musicmaster.in/images/instagram/trinitycollegelondon-musicmaster.in.webp"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Video;
