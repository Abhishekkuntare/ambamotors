import React from "react";
import "./Footer2.css";
import "./MediaFooter2.css";
import "../../assets/Constants/Fonts.css";
import Phone from "@material-ui/icons/Phone";
import Gmail from "@material-ui/icons/Mail";
import Location from "@material-ui/icons/LocationOn";
import Table from "@material-ui/icons/BusinessCenter";

const Footer2 = () => {
  return (
    <div className="Footer2">
      <div className="Footer2_container">
        <div className="footer2_container_left">
          <h1>Amba Motors</h1>
          <p>Live with cars,die with cars.</p>
          <div className="horizantal_line" />
        </div>
        <div className="footer_container_right">
          <h3>Contact us</h3>
          <div className="footer_container_right_row">
            <Phone style={{ color: "#00ffff" }} />
            <p>(+91) 9823028110</p>
          </div>
          <div className="footer_container_right_row">
            <Gmail style={{ color: "#00ffff" }} />
            <p>ambamotors@gmail.com</p>
          </div>
          <div className="footer_container_right_row">
            <Location style={{ color: "#00ffff" }} />
            <p>Amravati, India.</p>
          </div>
          <div className="footer_container_right_row">
            <Table style={{ color: "#00ffff" }} />
            <p>Except Friday, Sunday to Satarday</p>
          </div>
        </div>
        <div className="footer_container_right">
          <h3>Our Sevices</h3>
          <p>Full cars expert</p>
          <p>Servicing</p>
          <p>Washing & Rubbing</p>
          <p>Denting & Painting</p>
          <p>AlignMent</p>
        </div>
        <div className="footer_container_right">
          <h3>About Us</h3>
          <p>Pravin Kuntare</p>
          <p>Experience</p>
          <p>About</p>
          <p>Work</p>
          <p>Cars</p>
        </div>
      </div>
      <div className="footer2_horizantal_line" />
    </div>
  );
};

export default Footer2;
