import React from "react";
import "./style.scss";
import Image from "next/image";
import bg1 from "../../../public/bg1.png";
import bg2 from "../../../public/bg2.png";
import bg3 from "../../../public/bg3.png";
import bg4 from "../../../public/bg4.png";

export default function ImageTab() {
  return (
    <>
      <section className="imageTab">
        <div className="imageTabContainer">
          <div className="imageTabContainerChild1">
            <div className="imageTabImage">
              <Image src={bg1} />
            </div>
            <div className="imageTabImage">
              <Image src={bg2} />
            </div>
            <div className="imageTabImage">
              <Image src={bg3} />
            </div>
            <div className="imageTabImage">
              <Image src={bg4} />
            </div>
          </div>
          <div className="imageTabContainerChild2"></div>
        </div>
      </section>
    </>
  );
}
