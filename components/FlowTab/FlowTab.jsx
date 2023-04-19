import React from "react";
import "./style.scss";

const FlowTab = () => {
  return (
    <section>
      <div className="flowTab">
        <div className="flowTabContainer">
          <div className="flowTabChild">
            <h4>
              Creating Change,
              <br />
              One Step At A Time
            </h4>
            <p>Better lives, transform destinies</p>
          </div>
          <div className="flowTabChild">
            <h4>
              Strong, Vibrant
              <br />
              Alliances
            </h4>
            <p>With global and national associates</p>
          </div>
          <div className="flowTabChild">
            <h4>
              Trusted Partner
              <br />
              of the Government
            </h4>
            <p>Together, driving change by supporting policy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlowTab;
