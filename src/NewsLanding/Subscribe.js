import React from "react";
// import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
function Subscribe({ email }) {
  // console.log(props.data);
  return (
    <div className="subscribe">
      <div className="subscribe-main-div">
        <h1>
          Thanks for <br />
          subscribing !
        </h1>
        <p>
          A confirmation mail has been sent to <br /> <b>{email} </b>
          please open it and click
          <br /> the button inside to confirm your subscribing
        </p>
        <button className="subscribe-main-div-btn" >Dismiss message</button>
        <Link to="/">
          <button className="subscribe-main-div-btn back-btn" >Back</button>
        </Link>

      </div>
    </div>
  );
}

export default Subscribe;
