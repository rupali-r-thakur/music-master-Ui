import React from "react";
import "./home.css";
function Home() {
  return (
    <div className="home_page_main_container">
      <div className="home_img_container">
        <img
          src="https://musicmaster.in/public/images/landing-page/online-music-classes.webp"
          alt=""
        />
      </div>
      <div className="home_text_container">
        <div className="heading">
          <h1>
            Live 1 to 1 Online <span>Music</span> Classes
          </h1>
        </div>
        <div className="paragraph">
          <p>
            Taught by professional tutors for all ages Instructions in English &
            all Major Indian languages
          </p>
        </div>
        <div className="number">
          <div class="tutors-container">
            <div class="tutors-number">75+</div>
            <div class="tutors-text">
              <span>Professional</span>
              <span>Tutors</span>
            </div>
          </div>

          <div class="tutors-container2">
            <div class="tutors-number2">120+</div>
            <div class="tutors-text2">
              <span>Cities</span>
              <span>Worldwide</span>
            </div>
          </div>
        </div>
        <div className="button">
          <a href="https://app.musicmaster.in:8081/signup">
            <button id="button1">Book a FREE Demo</button>
          </a>
          <a href="https://api.whatsapp.com/send?phone=919789897600&text=&source=&data=">
            <button id="button2">WhatsApp Us</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
