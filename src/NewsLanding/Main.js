import React, { useState } from "react";
import leftImg from "../assets/signUpdesktop.svg";
// import Subscribe from "./Subscribe";
import { Link } from "react-router-dom";
import Subscribe from "./Subscribe";

function Main({ setEmail }) {


  // const handleClick = () => {
  // }
  return (
    <div className="main">
      <div className="main-container">
        <div className="left-content-div content-div">
          <div className="heading-div">
            <h1>Stay Updated !</h1>
            <h3>
              Join 60,000+ product managers recieving monthly <br />
              updates on :{" "}
            </h3>
          </div>
          <div className="list-div">
            <ul>
              <li>
                <p>Product discovery and building what matters </p>
              </li>
              <li>
                <p>measuring to ensure updates are a success</p>
              </li>
              <li>
                <p>And much more...</p>
              </li>
            </ul>
          </div>
          <div className="authentication-div">
            <label className="label">Email address</label>
            <br />
            <form action="">
              <input
                type="email" id="email" pattern=".+@globex\.com" size="30" required
                placeholder="example@gmail.com"
                className="authentication-div-input"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
            </form>
            <br />
            <Link to="/subscribe">
              <button className="authentication-div-btn" >
                Subscribe to monthly Newspaper
              </button>
            </Link>
          </div>
        </div>
        <div className="right-content-div content-div">
          <img src={leftImg}></img>
        </div>
      </div>
    </div>
  );
}

export default Main;
