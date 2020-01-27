import React from "react";
import { withRouter } from "react-router";
import "./footer.scss";
import Email from "../../../../assets/Email.png";
import Facebook from "../../../../assets/Facebook.png";
import Twitter from "../../../../assets/Twitter.png";
import Home from "../../../../assets/Home.png";
import Pin from "../../../../assets/Pin.png";
import Instagram from "../../../../assets/Instagram.png";

const Footer = () => {
  return (
    <footer>
      <div className="contacts">
        <div className="icons">
          <a href="https://www.instagram.com/speak_out_program/">
            <img src={Instagram} />
          </a>
          <a href="https://www.facebook.com/speakoutinfobh/?ref=bookmarks" target="_blank">
            <img src={Facebook} />
          </a>
          <a href="https://twitter.com/speakoutbh" target="_blank">
            <img src={Twitter} />
          </a>
          <a href="#">
            <img src={Home} />
          </a>
        </div>
        <div className="address">
          <a href="https://www.google.com/maps/place/Rd+No+3949,+Bani+Jamra,+Bahrain/@26.2109242,50.4587409,17z/data=!3m1!4b1!4m5!3m4!1s0x3e49ba6f42294655:0xff144caac5b9e0cc!8m2!3d26.2109194!4d50.4609296"
           target="_blank">
          <img src={Pin} />
          </a>
          <p>Rd No 3949, Bani Jamra, Bahrain</p>
          
        </div>
        <div className="email">
          <img src={Email} />
          <p>speakout.infobh@gmail.com</p>
        </div>
      </div>
      <div className="links">
        <p>Terms of Use</p>
        <p>Careers</p>
        <p>Site Map</p>
      </div>
    </footer>
  );
};

const FooterWithRouter = withRouter(Footer);

export default FooterWithRouter;