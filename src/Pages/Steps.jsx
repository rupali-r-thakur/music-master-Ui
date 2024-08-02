import React from "react";
import "./Steps.css";
function Steps() {
  return (
    <div class="container">
      <div class="centered-box">
        <div class="left-content">
          <h1>How it works?</h1>
          <h2>Learn Music Online</h2>
          <p>in 3 Simple Steps</p>
          <a href="https://app.musicmaster.in:8081/signup">
            <button href="#" class="cta-button">
              Book a FREE Demo
            </button>
          </a>
        </div>
        <div class="right-content">
          <div className="box">
            <div class="step-number">1</div>
            <p>
              <strong>Book</strong>
            </p>
            <p>Book a FREE Demo session. We will contact you soon.</p>
          </div>
          <div className="box">
            <div class="step-number">2</div>
            <p>
              <strong>Experience</strong>
            </p>
            <p>
              No extra downloads. Experience our technology on your web browser
              with the tutor.
            </p>
          </div>
          <div className="box">
            <div class="step-number">3</div>
            <p>
              <strong>Start</strong>
            </p>
            <p>Liked the demo? Upgrade and begin your musical journey.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
