import React from "react";
import "./Footer3.css";
import "./MediaFooter3.css";
import Facebook from "@material-ui/icons/Facebook";
import { Instagram } from "@material-ui/icons";
import { WhatsApp } from "@material-ui/icons";
import Location from "@material-ui/icons/LocationOn";
import KeyboardArrowUp from "@material-ui/icons/KeyboardArrowUp";

const Footer3 = () => {
  return (
    <div className="Footer3">
      <div className="Footer3_container">
        <div className="footer3_container_left">
          <div className="footer_container_left_row">
            <p>&copy; Copyright 2022 Amba Motors.</p>
            <h6>Privacy policy</h6>
            <h6>Terms of use</h6>
          </div>
          <p>
            Technology Solutions, AM, ("Company") and Customer agree, pursuant
            to the Maintenance and Repair Services Agreement (the “Agreement”)
            <br /> <br />
            that Company shall provide maintenance and repair services for the
          </p>
        </div>
        <div className="footer3_container_right">
          <Facebook style={{ color: "#00ffff", marginLeft: "10px" }} />
          <Instagram style={{ color: "#00ffff", marginLeft: "10px" }} />
          <WhatsApp style={{ color: "#00ffff", marginLeft: "10px" }} />
          <Location style={{ color: "#00ffff", marginLeft: "10px" }} />
          <a href="#" className="KeyboardArrowUp">
            <KeyboardArrowUp style={{ color: "white" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer3;
