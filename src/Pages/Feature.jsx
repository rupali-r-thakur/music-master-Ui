import React from "react";
import "./Feature.css";
function Feature() {
  return (
    <div className="feature_main_container">
      <div className="feature_heading">
        <h1>Featured In</h1>
      </div>
      <div className="feature_img">
        <div className="dv1">
          <a href="https://www.hindustantimes.com/brand-stories/musicmaster-makes-learning-music-easy-from-the-comfort-of-your-home-101687533659238.html">
            {" "}
            <img
              src="https://musicmaster.in/public/images/featured/hindustan-times.webp"
              alt=""
            />
          </a>
        </div>
        <div className="dv1">
          <a href="https://www.thehindu.com/entertainment/music/learn-tamil-songs-on-guitar-online/article27466709.ece">
            <img
              src="https://musicmaster.in/public/images/featured/The_Hindu.webp"
              alt=""
            />
          </a>
        </div>
        <div className="dv1">
          <a href="https://www.facebook.com/bigfmtamil/videos/1366633123490378/">
            <img
              src="https://musicmaster.in/public/images/featured/big_fm.webp"
              alt=""
            />
          </a>
        </div>
        <div className="dv1">
          <a href="https://www.deccanherald.com/brandspot/sponsored/online-music-education-platform-music-master-makes-learning-music-easy-1240217.html#:~:text=MusicMaster%20is%20an%20e%2Dlearning,reached%20out%20to%20people%20worldwide">
            <img
              src="https://musicmaster.in/public/images/featured/deccan%20herald.webp"
              alt=""
            />
          </a>
        </div>
        <div className="dv1">
          <a href="https://www.startupsindia.in/startup/musicmaster-in-is-one-stop-solution-to-learn-music-buy-musical-instruments/">
            <img
              src="https://musicmaster.in/public/images/featured/Startupsindia-logo.webp"
              alt=""
            />
          </a>
        </div>
        <div className="dv1">
          <a href="https://www.greatcompanies.in/post/n-g-vijay-anand-founder-at-musicmaster">
            <img
              src="https://musicmaster.in/public/images/featured/great-companies-logo.webp"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Feature;
