import React from "react";
import Nav from "../Nav/Nav";
import Mid1 from "../Mid1/Mid1";
import "./Home.css";
import Services from "../Services/Services";
import Work from "../Work/Work";
import Book from "../Book/Book";
import Footers from "../Footers/Footers";

const Home = () => {
  return (
    <div className="home">
      <Nav />
      <Mid1 />
      <Services />
      <Work />
      <Book />
      <Footers />
    </div>
  );
};

export default Home;
