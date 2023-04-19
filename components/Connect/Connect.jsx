import React from "react";
import "./style.scss";

const Connect = () => {
  return (
    <>
      <section className="connect">
        <div className="connectContainer">
          <div className="connectLeft">
            <div className="connectLeftBox">
              <h4>Volunteer With Chal Naari</h4>
              <p className="cLBoxPara1">
                Get Your Ideas Supported By
                <br />
                Chal Naari
              </p>
              <p className="cLBoxPara2">
                We Appreciate innovative & kind ideas
              </p>
              <a href="/contact">
                <button>Let's Connect</button>
              </a>
            </div>
          </div>
          <div className="connectRight">
            <div className="connectRightBox">
              <h4>Work With Us</h4>
              <p className="cRBoxPara1">
                Build a fulfilling career with
                <br />
                Chal Naari
              </p>
              <p className="cRBoxPara2">Be The Change You Want To See</p>
              <a href="/careers">
                <button>Apply Now</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Connect;
