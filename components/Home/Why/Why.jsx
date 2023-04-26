import React from "react";
import "./style.scss";
import { RiDoubleQuotesL } from "react-icons/ri";
import Image from "next/image";
import whyImage from "@/public/assets/whyImage.png";

const Why = () => {
  return (
    <section className="why">
      <div className="whyHead">
        <h2>Why Women Empowerment?</h2>
      </div>
      <div className="whyContainer">
        <div className="whyLeft">
          <div className="whyLeftImage">
            <Image src={whyImage} alt="Why Image" />
          </div>
        </div>
        <div className="whyRight">
          <div className="whyRightContent">
            <p>
              Women empowerment helps to achieve gender equality by providing
              women with equal opportunities and resources to succeed in their
              personal and professional lives.
            </p>
            <div className="whySectionQuote">
              <p className="whyQuoteIcon">
                <RiDoubleQuotesL />
              </p>
              <p className="whyQuote">
                "It took me quite a long time to develop a voice, and now that I
                have it, I am not going to be silent."
                <br />
                by Madeleine Albright
              </p>
            </div>
            <p>
              Empowering women can boost economic growth by increasing their
              participation in the workforce and promoting entrepreneurship.
              When women have access to education and job opportunities, they
              can contribute to the economy and improve their financial status,
              which benefits their families and communities.
            </p>
            <p>
              Women play a critical role in shaping social and cultural norms.
              Empowering women helps to create more inclusive and diverse
              societies, where all individuals are respected and valued.
            </p>
            <p>
              Overall, women empowerment is important for promoting equality,
              economic growth, health, and social and cultural development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
