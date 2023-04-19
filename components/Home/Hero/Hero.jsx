import React from "react";

import "./style.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="heroContainer">
        <div className="heroContainerLeft">
          <div className="heroCLeftContent">
            <h1>Chal Naari</h1>
            <h2>Ashes To Re-birth</h2>
            <p>
              <span>
                "Unleashing the Power of Women Through Education,
                <br />
                Support, and Advocacy, with Chal Naari"
              </span>
            </p>
            <div className="heroBtns">
              <div className="heroBtn1">
                <button>
                  <a href="/about">About</a>
                </button>
              </div>
              <div className="heroBtn2">
                <button>
                  <a href="/stories">Stories</a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="heroContainerRight">
          <div className="heroCRightImages"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
