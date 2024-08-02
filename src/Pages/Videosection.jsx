import React from "react";
import "./Videosection.css";
function Videosection() {
  return (
    <div className="image_text">
      <div className="text">
        <h1>Video Platform Designed for Music Tutoring Online</h1>

        <p>
          We have embedded music tools - Metronome , Shruti box, Guitar tuner
          and Vocal pitch monitor in our video platform for superior learning
          experience.
        </p>
        <a href="https://app.musicmaster.in:8081/signup">
          <button>Book a FREE Demo</button>
        </a>
      </div>
      <div className="image">
        <img
          src="https://musicmaster.in/public/images/about-technology/Playing_guitar_boy.webp"
          alt=""
        />
      </div>
    </div>
  );
}

export default Videosection;
