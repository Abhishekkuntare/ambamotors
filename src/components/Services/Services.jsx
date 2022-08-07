import React from "react";
import "./Services.css";
import "./MediaServices.css";
import "../assets/Constants/Fonts.css";
import Tools from "../assets/tools.png";
import Cars from "../assets/cars.png";
import CarWash from "../assets/carWash.png";
import House from "../assets/house.png";
import "../assets/Constants/Fonts.css";
import Brush from "../assets/brush.png";
import Engineer from "../assets/engineer.png";

const Services = () => {
  return (
    <div className="Services">
      <div className="services_title">
        <div className="services_titile_horizantal_line" />
        <h1>Services.</h1>
      </div>
      <div className="services_title_all">
        <p>our services for clients</p>
      </div>
      <div className="Services_box">
        <div className="Services_box_inner">
          <img src={Engineer} alt="Tools" />
          <h1>automotive repair garages.</h1>
          <p>
            Mechanics work in a variety of settings depending on the nature of
            their positions. Most commonly, mechanics work in automotive.
          </p>
        </div>
        <div className="Services_box_inner">
          <img src={Cars} alt="Tools" />
          <h1>Any car any where.</h1>
          <p>
            We repair every types of cars, with better presence of mind. cars is
            Refer to specifics We saw any problem and solve like a car's heart.
          </p>
        </div>
        <div className="Services_box_inner">
          <img src={House} alt="Tools" />
          <h1>Home service.</h1>
          <p>
            i am glad I chose them, quick friendly service. Upfront immediately
            about the price of the work done on my car and detailed why.
          </p>
        </div>
        <div className="Services_box_inner">
          <img src={CarWash} alt="Tools" />
          <h1>Car Wash</h1>
          <p>
            We will give you the best car wash service in budget While a
            successful wash revitalizes a vehicle's appearance, a car wash is
            first and foremost a service.
          </p>
        </div>
        <div className="Services_box_inner">
          <img src={Brush} alt="Tools" />
          <h1>denting & painting.</h1>
          <p>
            we saw the problem of denting & painting in regenable rate. Denting
            and Painting is of two components: One is removing dents, scratches
            on the vehicle external body are removed & look like good.
          </p>
        </div>
        <div className="Services_box_inner">
          <img src={Tools} alt="Tools" />

          <h1>Alignment.</h1>
          <p>
            Tire alignment, also known as wheel alignment, can help your tires
            perform properly and help them last longer. It
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
