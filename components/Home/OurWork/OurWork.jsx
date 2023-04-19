import React from "react";
import "./style.scss";

const ourWork = [
  {
    id: 1,
    title: "Feminist Leadership",
  },
  {
    id: 2,
    title: "Sexual & Reproductive Health & Rights",
  },
  {
    id: 3,
    title: "Responses To Gender Based Violence.",
  },
  {
    id: 4,
    title: "Fostering Collective Resilience.",
  },
];

const OurWork = () => {
  return (
    <section className="ourWork">
      <div className="ourWorkHead">
        <h2>Our Work.</h2>
      </div>
      <div className="ourWorkContainer">
        {ourWork.map((data) => {
          return (
            <>
              <div className="ourWorkCChild">
                <div className="owcContent">
                  <h4>{data.title}</h4>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default OurWork;
