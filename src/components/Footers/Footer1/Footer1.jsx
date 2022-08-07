import React from "react";
import "./Footer1.css";
import "./MediaFooter1.css";
import "../../assets/Constants/Fonts.css";
import Facebook from "@material-ui/icons/Facebook";
import { Instagram } from "@material-ui/icons";
import { WhatsApp } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

const Footer1 = () => {
  return (
    <>
      <div className="footer1_vertical_line" />
      <div className="footer1">
        <IconButton>
          <div className="footer1_circle">
            <Facebook />
          </div>
        </IconButton>
        <IconButton>
          <div className="footer1_circle">
            <Instagram />
          </div>
        </IconButton>
        <IconButton>
          <div className="footer1_circle">
            <WhatsApp />
          </div>
        </IconButton>
      </div>
      <div className="footer_end">
        <h1>Have any query in mind!</h1>
        <button>Make Inquiry</button>
      </div>
    </>
  );
};

export default Footer1;
