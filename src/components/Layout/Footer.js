import React from "react";
import { Link } from "react-router-dom";
import '../../../src/App.css'
import { FaShoppingBag } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-sec">
      <div className="main">
        <div className="logo row">
          <div className="footer-logo ">
            <FaShoppingBag style={{ fontSize: "28px" }} />
            <div className="mt-1">Shopify</div>
          </div>
          <div className="logo-des">
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
            <a href="#" className="btn-know">Know More</a>
          </div>
        </div>
        <div className="office row">
          <div className="footer-header">
            <h3>Office</h3>
          </div>
          <div className="office-des">
            <p>here are <br /> many variations of passages<br />of Lorem Ipsum<br />available</p>
            <a href="#">tatritwik@gmail.com</a>
            <p className="num">+91-7028978922</p>
          </div>
        </div>
        <div className="link row">
          <div className="footer-header">
            <h3>Links</h3>
          </div>
          <div className="link-des">
            <Link to="/about" className="footer-links">About</Link>
            <Link to="/policy" className="footer-links">Privacy Policies</Link>
            <Link to="/contact" className="footer-links">Contact</Link>
          </div>
        </div>
        <div className="newsletter row">
          <div className="footer-header">
            <h3>Newsletter</h3>
          </div>
          <div className="newsletter-des">
            <div className="subcribe"><i className="sub-icon ri-mail-check-fill" />
              <input type="mail" placeholder="Enter Email ID" required />
              <i className="sub-icon ri-arrow-right-line" />
            </div>
            <div className="icons">
              <Link to="https://www.instagram.com/tatsangram/"><FaInstagram/></Link>
              <Link to="https://www.linkedin.com/in/ritwik-sudhakar-tat-047a88194/"><FaLinkedin/></Link>
              <Link to="https://github.com/ritwik1709"><FaGithubSquare/></Link>
              <Link to="https://www.facebook.com/ritwik.tat?mibextid=JRoKGi"><FaFacebookSquare/></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <hr />
        <p>© Copyright 2023 Ritwik Sudhakar Tat.</p>
      </div>
    </footer>

  );
};

export default Footer;
