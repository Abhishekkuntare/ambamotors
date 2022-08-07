import React from "react";
import "./Work.css";
import "./MediaWork.css";
import "../assets/Constants/Fonts.css";
import Slider from "./Slider/Slider";

const Work = () => {
  return (
    <div className="work">
      <div className="work__row1">
        <div className="work__row1_left">
          <div className="work_row1_left_inner">
            <div className="work_row1_hr" />
            <h1>Works.</h1>
          </div>
          <p>Things we've provide</p>
        </div>
        <div className="work__row1_right">
          <button>view all</button>
        </div>
      </div>
      <Slider />
    </div>
  );
};

export default Work;
