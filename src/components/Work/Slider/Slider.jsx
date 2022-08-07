import React from "react";
import "./Slider.css";
import "./MediaSlider.css";
import AutoplaySlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "../../assets/Constants/Fonts.css";
import Jaguar from "../../assets/jaguar.png";
import Mercedes from "../../assets/mercdes.webp";
import Audi from "../../assets/audi.png";
import Jeep from "../../assets/jeep.png";
import Landrover from "../../assets/landrover.png";
import RangeRover from "../../assets/rangerover.png";
import Kia from "../../assets/kia.jpg";
import Mg from "../../assets/mg.webp";
import Fortuner from "../../assets/fortuner.jpeg";
import Suzuki from "../../assets/suzuki.png";
import Toyoto from "../../assets/toyoto.jpg";
import Tata from "../../assets/tata.jpg";
import Slider1 from "../../assets/slider1.jpeg";
import Slider2 from "../../assets/slider2.jpeg";
import Slider3 from "../../assets/slider3.webp";
import Slider4 from "../../assets/slider4.webp";

const Slider = () => {
  return (
    <>
      <div className="Slider">
        <AutoplaySlider
          style={{
            height: "50% ",
            width: "50%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          play={true}
          interval={6000}
          infinite={true}
        >
          <div
            style={{
              borderRadius: "100px",
            }}
          >
            <img className="slider_img" src={Slider1} alt="slider1" />
          </div>
          <div style={{ borderRadius: "100px" }}>
            <img className="slider_img" src={Slider2} alt="slider2" />
          </div>
          <div style={{ borderRadius: "100px" }}>
            <img className="slider_img" src={Slider3} alt="slider3" />
          </div>
          <div style={{ borderRadius: "100px" }}>
            <img className="slider_img" src={Slider4} alt="slider4" />
          </div>
        </AutoplaySlider>
      </div>
      <div className="Slider2_name">
        <h1>Recommended Cars</h1>
        <div className="Slider2">
          <AutoplaySlider
            className="color"
            style={{
              height: "500px ",
              width: "320px",
              marginLeft: "auto",
              marginRight: "20px",
            }}
            play={true}
            interval={6000}
            infinite={true}
          >
            <div
              style={{
                borderRadius: "50px",
                border: "2px solid #ACE0FF",
                backgroundColor: "black",
                width: "310px",
                height: "480px",
              }}
            >
              <img className="slider_img2" src={Mercedes} alt="mercedes" />
            </div>
            <div
              style={{
                borderRadius: "50px",
                border: "2px solid #87FEC8",
                backgroundColor: "black",
                width: "310px",
                height: "480px",
              }}
            >
              <img className="slider_img2" src={Audi} alt="audi" />
            </div>
            <div
              style={{
                borderRadius: "50px",
                border: "2px solid #E5BAD8",
                backgroundColor: "black",
                width: "310px",
                height: "480px",
              }}
            >
              <img className="slider_img2" src={Jaguar} alt="Jaguar" />
            </div>
            <div
              style={{
                borderRadius: "50px",
                border: "2px solid #00ffff",
                backgroundColor: "black",
                width: "310px",
                height: "480px",
              }}
            >
              <img className="slider_img2" src={Jeep} alt="Jeep" />
            </div>
          </AutoplaySlider>

          <AutoplaySlider
            className="color"
            style={{
              height: "500px ",
              width: "320px",
              marginLeft: "auto",
              marginRight: "20px",
            }}
            play={true}
            interval={6000}
            infinite={true}
          >
            <div
              style={{
                borderRadius: "50px",
                border: "2px solid #fff",
                backgroundColor: "black",
                width: "310px",
                height: "480px",
              }}
            >
              <img className="slider_img2" src={Landrover} alt="land Rover" />
            </div>
            <div
              style={{
                borderRadius: "50px",
                border: "2px solid #fff",
                backgroundColor: "black",
                width: "310px",
                height: "480px",
              }}
            >
              <img className="slider_img2" src={RangeRover} alt="Range Rover" />
            </div>
            <div
              style={{
                borderRadius: "50px",
                border: "2px solid #fff",
                backgroundColor: "black",
                width: "310px",
                height: "480px",
              }}
            >
              <img className="slider_img2" src={Kia} alt="kia" />
            </div>
            <div
              style={{
                borderRadius: "50px",
                border: "2px solid #FFE5FE",
                backgroundColor: "black",
                width: "310px",
                height: "480px",
              }}
            >
              <img className="slider_img2" src={Mg} alt="mg" />
            </div>
          </AutoplaySlider>

          <AutoplaySlider
            className="color"
            style={{
              height: "500px ",
              width: "320px",
              marginLeft: "auto",
              marginRight: "20px",
            }}
            play={true}
            interval={6000}
            infinite={true}
          >
            <div
              style={{
                borderRadius: "50px",
                border: "2px solid #FBABEA",
                backgroundColor: "black",
                width: "310px",
                height: "480px",
              }}
            >
              <img className="slider_img2" src={Fortuner} alt="fortunare" />
            </div>
            <div
              style={{
                borderRadius: "50px",
                border: "2px solid #E86C31",
                backgroundColor: "black",
                width: "310px",
                height: "480px",
              }}
            >
              <img className="slider_img2" src={Suzuki} alt="suzuki" />
            </div>
            <div
              style={{
                borderRadius: "50px",
                border: "2px solid #0099F4",
                backgroundColor: "black",
                width: "310px",
                height: "480px",
              }}
            >
              <img className="slider_img2" src={Toyoto} alt="Toyota" />
            </div>
            <div
              style={{
                borderRadius: "50px",
                border: "2px solid #96F7B1",
                backgroundColor: "black",
                width: "310px",
                height: "480px",
              }}
            >
              <img className="slider_img2" src={Tata} alt="tata" />
            </div>
          </AutoplaySlider>
        </div>
      </div>
    </>
  );
};

export default Slider;
