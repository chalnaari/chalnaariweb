import React from "react";
import "./style.scss";

const PConnect = () => {
  return (
    <section className="pConnect">
      <div className="pConnectContainer">
        <div className="pConnectLeft">
          <h2>Want To Partner With Us.</h2>
          <p>
            We believe in joining hands with organizations committed to cocreate
            solutions for global good.
          </p>
        </div>
        <div className="pConnectRight">
          <a href="/contact">
            <button className="pConnectBtn">Let's Connect</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PConnect;
