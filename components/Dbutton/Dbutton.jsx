import React from "react";
import "./style.scss";

const Dbutton = () => {
  return (
    <>
      <section className="dButton">
        <div className="dButtonContainer">
          <div className="dbLeft">
            <a href="/volunteer">
              <p>Volunteer With Us</p>
            </a>
          </div>
          <div className="dbRight">
            <a href="/donate">
              <p>Donate Now</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dbutton;
