import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding app__bg" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">18, Ghane Rao Ghati , Jagdish Temple Road , Udaipur(Raj.)</p>
        <p className="p__opensans">+91 827-92X-XXXX</p>
        <p className="p__opensans">+91 946-61X-XXXX</p>
      </div>

      <div className="app__footer-links_logo">
        {/* <img src={images.gericht} alt="nopic" /> <h2>Leather Jorunal</h2> */} <h2 className="app__footer-headtext"> Leather Jorunal</h2>
        <p className="p__opensans">
          &quot;The best way to find yourself is to lose yourself in the service
          of others.&quot;
        </p>
        <img src={images.leatherbook} alt="spoon_image" className="spoon__img"  style={{width:"90px" }}/>
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023-24 Jorunal. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
