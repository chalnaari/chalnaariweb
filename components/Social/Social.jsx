import React from "react";
import "./style.scss";

const Social = () => {
  return (
    <section className="socialSection">
      {/* <div className="socialSectionHead">
          <h2>
            <span>Chal Naari</span> Social
          </h2>
        </div> */}
      <div className="socialSContainer">
        <div className="socialSChild">
          <h4>
            <a href="/" className="socialSFacebook">
              facebook.
            </a>
          </h4>
        </div>
        <div className="socialSChild">
          <h4>
            <a href="/" className="socialSTwitter">
              twitter.
            </a>
          </h4>
        </div>
        <div className="socialSChild">
          <h4>
            <a href="/" className="socialSLinkedin">
              linkedin.
            </a>
          </h4>
        </div>
        <div className="socialSChild">
          <h4>
            <a href="/" className="socialSInstagram">
              instagram.
            </a>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Social;
