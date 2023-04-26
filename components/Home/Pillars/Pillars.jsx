import React from "react";
import "./style.scss";
import Image from "next/image";
import pillar1 from "@/public/assets/pillar1.png";
import pillar2 from "@/public/assets/pillar2.png";
import pillar3 from "@/public/assets/pillar3.png";
import pillar4 from "@/public/assets/pillar4.png";
// import pillar5 from "../../../public/pillar5.png";

const Pillars = () => {
  return (
    <section className="pillars">
      <div className="pillarsHead">
        <h2>Our Pillars.</h2>
      </div>
      <div className="pillarsContainer">
        <div className="pillarContainerChild">
          <div className="pcImage">
            <Image src={pillar1} alt="Pillar 1" />
          </div>
          <div className="pillarContent">
            <h4>
              Economic &<br />
              Financial Empowerment
            </h4>
          </div>
        </div>
        <div className="pillarContainerChild">
          <div className="pcImage">
            <Image src={pillar2} alt="Pillar 2" />
          </div>
          <div className="pillarContent">
            <h4>
              Education &<br />
              Skill Development
            </h4>
          </div>
        </div>
        <div className="pillarContainerChild">
          <div className="pcImage">
            <Image src={pillar3} alt="Pillar 3" />
          </div>
          <div className="pillarContent">
            <h4>
              Health &<br />
              Well-being
            </h4>
          </div>
        </div>
        <div className="pillarContainerChild">
          <div className="pcImage">
            <Image src={pillar4} alt="Pillar 4" />
          </div>
          <div className="pillarContent">
            <h4>
              Advocacy &<br />
              Awareness
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pillars;
