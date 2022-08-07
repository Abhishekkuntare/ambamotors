import React from "react";
import "./Book.css";
import "./MediaBook.css";
import "../assets/Constants/Fonts.css";
import Lambo from "../assets/lambo.jpg";

const Book = () => {
  return (
    <div className="Book">
      <div className="book_title">
        <h1>Join with us</h1>
        <p>Find the perfect garage, today</p>
      </div>
      <div className="book_container">
        <div className="book_container_left">
          <img src={Lambo} alt="lambo" />
        </div>
        <div className="book_container_right">
          <div className="book_container_right_inner">
            <h1>Flexible rate</h1>
            <p>
              With the limited rate we work best for you people, and we have the
              reginable rate.
            </p>
          </div>
          <div className="book_container_right_inner">
            <h1>Best services</h1>
            <p>
              share your trips with love ones and collaborate with fellow
              travelers
            </p>
          </div>
          <div className="book_container_right_inner">
            <h1>Time & Class</h1>
            <p>
              We work with our full of enery and repair your car at less time
              with good effertes.
            </p>
          </div>
          <div className="book_container_right_button">
            <button>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
