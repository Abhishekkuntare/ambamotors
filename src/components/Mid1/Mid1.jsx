import React from "react";
import "../assets/Constants/Fonts.css";
import "./Mid1.css";
import "./MediaMid1.css";
import Telegram from "@material-ui/icons/Telegram";
import Settings from "@material-ui/icons/Settings";
import EmojiObjectsRounded from "@material-ui/icons/EmojiObjectsRounded";

const Mid1 = () => {
  return (
    <div className="mid_all">
      <div className="mid1">
        <div className="mid1_left">
          <p>creative mind, creative works</p>
          <h1>We are Amba Motors.</h1>
          <button>getting started</button>
        </div>
        <div className="mid_right">
          <img
            src="   
        https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
          />
        </div>
      </div>
      <div className="mid1_box_all">
        <div className="mid1_box">
          <Telegram
            style={{
              color: "#00ffff",
              fontSize: 60,
              marginLeft: 30,
              marginTop: 30,
              marginBottom: 30,
            }}
          />

          <h2>Future Concept.</h2>
          <div className="mid1_box_horizantal" />
          <p>
            We have the technology making new advancements, there are several
            new domains in our Garage.
          </p>
        </div>
        <div className="mid1_box">
          <Settings
            style={{
              color: "#00ffff",
              fontSize: 60,
              marginLeft: 30,
              marginTop: 30,
              marginBottom: 30,
            }}
          />
          <h2>The Big Ideas.</h2>6
          <div className="mid1_box_horizantal" />
          <p>
            The ideas on fly! with any wast problem but we have the solution to
            solve that problem.
          </p>
        </div>
        <div className="mid1_box">
          <EmojiObjectsRounded
            style={{
              color: "#00ffff",
              fontSize: 60,
              marginLeft: 30,
              marginTop: 30,
              marginBottom: 30,
            }}
          />

          <h2>Creative Solutions.</h2>
          <div className="mid1_box_horizantal" />
          <p>
            We solve any problem with the correction and creative ideas used for
            find solve the issue you have.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mid1;
