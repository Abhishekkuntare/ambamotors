import React, { useState } from "react";
import { Clear } from "@material-ui/icons";
import styled from "styled-components";
import "./Nav.css";
import "./MediaNav.css";
import Logo from "../assets/Logo.jpg";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import burger from "../assets/burger.png";

const Nav = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);

  // handling the css

  // handle Css
  const [toggleCss, setToggleCss] = useState(false);
  const handleCss = () => {
    toggleCss ? setToggleCss(false) : setToggleCss(true);
  };
  // handle Css1
  const [toggleCss1, setToggleCss1] = useState(false);
  const handleCss1 = () => {
    toggleCss1 ? setToggleCss1(false) : setToggleCss1(true);
  };
  // handle Css2
  const [toggleCss2, setToggleCss2] = useState(false);
  const handleCss2 = () => {
    toggleCss2 ? setToggleCss2(false) : setToggleCss2(true);
  };
  // handle Css3
  const [toggleCss3, setToggleCss3] = useState(false);
  const handleCss3 = () => {
    toggleCss3 ? setToggleCss3(false) : setToggleCss3(true);
  };
  // handle Css4
  const [toggleCss4, setToggleCss4] = useState(false);
  const handleCss4 = () => {
    toggleCss4 ? setToggleCss4(false) : setToggleCss4(true);
  };

  // stopToggle
  const stopToggle = () => {
    setToggleCss1(false);
    setToggleCss2(false);
    setToggleCss3(false);
    setToggleCss4(false);
  };

  // stopToggle1
  const stopToggle1 = () => {
    setToggleCss(false);
    setToggleCss2(false);
    setToggleCss3(false);
    setToggleCss4(false);
  };

  // stopToggle2
  const stopToggle2 = () => {
    setToggleCss1(false);
    setToggleCss(false);
    setToggleCss3(false);
    setToggleCss4(false);
  };

  // stopToggle3
  const stopToggle3 = () => {
    setToggleCss1(false);
    setToggleCss2(false);
    setToggleCss(false);
    setToggleCss4(false);
  };

  // stopToggle4
  const stopToggle4 = () => {
    setToggleCss1(false);
    setToggleCss2(false);
    setToggleCss3(false);
    setToggleCss(false);
  };

  return (
    <>
      <div className="nav">
        <div className="nav_left">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="nav_right">
          <ul>
            <div className="nav_right_container">
              <li
                onClick={() => {
                  handleCss();
                  stopToggle();
                }}
                className={toggleCss ? "nav_right_li_toggle" : "nav_right_li"}
              >
                Home
              </li>
              <KeyboardArrowDown
                style={{
                  color: "#00FFFF",
                  width: 17,
                  marginLeft: 2,
                  marginRight: 5,
                }}
                className="nav_down_arrow"
              />
            </div>
            <div className="nav_right_container">
              <li
                onClick={() => {
                  handleCss1();
                  stopToggle1();
                }}
                className={toggleCss1 ? "nav_right_li_toggle" : "nav_right_li"}
              >
                Services{" "}
              </li>
              <KeyboardArrowDown
                style={{
                  color: "#00FFFF",
                  width: 17,
                  marginLeft: 2,
                  marginRight: 5,
                }}
              />
            </div>
            <div className="nav_right_container">
              <li
                onClick={() => {
                  handleCss2();
                  stopToggle2();
                }}
                className={toggleCss2 ? "nav_right_li_toggle" : "nav_right_li"}
              >
                Works
              </li>
              <KeyboardArrowDown
                style={{
                  color: "#00FFFF",
                  width: 17,
                  marginLeft: 2,
                  marginRight: 5,
                }}
              />
            </div>
            <div className="nav_right_container">
              <li
                onClick={() => {
                  handleCss3();
                  stopToggle3();
                }}
                className={toggleCss3 ? "nav_right_li_toggle" : "nav_right_li"}
              >
                About
              </li>
              <KeyboardArrowDown
                style={{
                  color: "#00FFFF",
                  width: 17,
                  marginLeft: 2,
                  marginRight: 5,
                }}
              />
            </div>
            <div className="nav_right_container">
              <li
                onClick={() => {
                  handleCss4();
                  stopToggle4();
                }}
                className={toggleCss4 ? "nav_right_li_toggle" : "nav_right_li"}
              >
                Contact
              </li>
              <KeyboardArrowDown
                style={{
                  color: "#00FFFF",
                  width: 17,
                  marginLeft: 2,
                  marginRight: 5,
                }}
              />
            </div>
          </ul>
        </div>
        <input
          className="nav_right_search"
          type="text"
          placeholder="Search...."
        />
        <img
          onClick={() => setBurgerStatus(true)}
          className="nav_right_burger"
          src={burger}
          alt=""
        />
      </div>

      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClear onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>

        <li>
          <a href="/Home"> Home</a>
        </li>
        <li>
          <a href="/Services"> Services</a>
        </li>
        <li>
          <a href="/Works">Works</a>
        </li>
        <li>
          <a href="/About"> About</a>
        </li>
        <li>
          <a href="/Contact">Contact</a>
        </li>
      </BurgerNav>
    </>
  );
};

export default Nav;

const BurgerNav = styled.div`
  overflow-y: scroll;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: black;
  width: 100%;
  z-index: 16;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
a{
  text-align: start;
  transition: transform 0.6s ease-in-out;
  transform: ${(props) => (props.show ? "translateY(0)" : "translateY(100%)")};
}

  li {
    padding: 25px;
    color: #181818;
    vertical-align: middle;
    white-space: "wrap";
    width: 60%;
    cursor: pointer;
    display: flex;
    margin-left:"auto",
    margin-right:"auto"
    align-items: center;
    justify-content: center;

  }
  a {
    font-size:15px;

    font-weight: 600;
    text-decoration: none;
    color: #00ffff;
    text-align: center;
    text-transform: uppercase;
    font-family: "Spartan";
  }
`;
const CustomClear = styled(Clear)`
  cursor: pointer;
  margin-top: 19px;
  font-size: 1.3rem;
`;
const CloseWrapper = styled.div`
  color: gray;
`;
