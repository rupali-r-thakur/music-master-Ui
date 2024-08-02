import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <footer className="footer_main_container">
      <div className="footer_section contact_info">
        <h4>Contact Us</h4>
        <p>
          E-mail:{" "}
          <a href="mailto:support@musicmaster.in">support@musicmaster.in</a>
        </p>
        <p>
          Mobile: <a href="tel:+919789897600">+91 9789897600</a>
        </p>
        <button className="contact_button">+91 9789897600</button>
      </div>

      <div className="footer_section">
        <h4>Singing Classes</h4>
        <ul>
          <li>Carnatic Vocal</li>
          <li>Hindustani Vocal</li>
          <li>Western Vocal</li>
        </ul>
      </div>

      <div className="footer_section">
        <h4>Instruments</h4>
        <ul>
          <li>Online Guitar Class</li>
          <li>Online Piano Class</li>
          <li>Online Flute Class</li>
          <li>Online Violin Class</li>
          <li>Online Drums Class</li>
          <li>Online Ukulele Class</li>
        </ul>
      </div>

      <div className="footer_section">
        <h4>Grades</h4>
        <ul>
          <li>Rock School</li>
          <li>Trinity</li>
          <li>ABRSM</li>
          <li>Carnatic Grades</li>
          <li>Students Performance</li>
        </ul>
      </div>

      <div className="footer_section">
        <h4>Music Tools</h4>
        <ul>
          <li>Guitar Tuner</li>
          <li>Metronome</li>
          <li>Shruti Box</li>
          <li>Virtual Piano</li>
          <li>Ukulele Tuner</li>
          <li>Vocal Range Finder</li>
        </ul>
      </div>

      <div className="footer_section">
        <h4>Follow Us</h4>
        <div className="social_icons">
          <div className="icon facebook">
            <FaFacebook />
          </div>
          <div className="icon linkedin">
            <FaLinkedinIn />
          </div>
          <div className="icon youtube">
            <FaYoutube />
          </div>
          <div className="icon instagram">
            <FaInstagram />
          </div>
        </div>
        <p>
          <img
            src="https://musicmaster.in/public/images/brand_logos/startupindia-logo.webp"
            alt="Startup India"
            style={{ height: "80%", width: "70%", margin: "10%" }}
          />
        </p>
      </div>

      <div className="footer_section">
        <h4>Company</h4>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/become-a-tutor">Become a Tutor</a>
          </li>
          <li>
            <a href="/about-us">About Us</a>
          </li>
          <li>
            <a href="/careers">Careers</a>
          </li>
          <li>
            <a href="/admin">Admin</a>
          </li>
        </ul>
      </div>

      <div className="footer_section">
        <h4>Quick Links</h4>
        <ul>
          <li>
            <a href="/pricing-plans">Pricing Plans</a>
          </li>
          <li>
            <a href="/buy-instruments">Buy Instruments</a>
          </li>
          <li>
            <a href="/music-teachers">Music Teachers</a>
          </li>
          <li>
            <a href="/support">Support</a>
          </li>
          <li>
            <a href="/tech-requirements">Tech. Requirements</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/musicmaster-tv">Musicmaster TV</a>
          </li>
          <li>
            <a href="/faqs">FAQs</a>
          </li>
          <li>
            <a href="/contact-us">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="footer_section">
        <h4>Support</h4>
        <ul>
          <li>Tech. Requirements </li>
          <li>Blog</li>
          <li>Musicmaster TV</li>
          <li>FAQs</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div className="footer_section">
        <h4>Music Classes</h4>
        <ul>
          <li>Pallikaranai (Offline)</li>
          <li>Music Classes for Adults</li>
          <li>Music Classes in Chennai</li>
        </ul>
      </div>

      <div className="footer_section company_info">
        <p>HappyMusic Technologies Pvt Ltd,</p>
        <p>Plot No.227 (First Floor), 1st Main Road,</p>
        <p>Kamakoti Nagar, Pallikaranai,</p>
        <p>Chennai-600100</p>
      </div>

      <div className="footer_section_privacy">
        <p>Privacy Refund Terms</p>
        <hr />
        <p>@ HappyMusic Technologies Pvt. Ltd.</p>
      </div>
    </footer>
  );
}

export default Footer;
