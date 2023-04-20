import React from "react";
import "./style.scss";
import { CommonButton } from "../Buttons/Buttons";
import { RiDoubleQuotesL } from "react-icons/ri";
import Image from "next/image";

import aboutSection from "../../public/aboutSection.png";

const About = () => {
  return (
    <>
      <section className="aboutSection">
        <div className="aboutSectionHead">
          <h2>About Chal Naari.</h2>
        </div>
        <div className="aboutSectionContainer">
          <div className="ascLeft">
            <div className="ascLeftContent">
              <h5>chal naari</h5>
              <h4>Ashes To Re-Birth</h4>
              <p>
                Our organization is dedicated to promoting gender equality and
                empowering women in various areas of life, including education,
                career, health, and social justice. Through our efforts, we aim
                to help women realize their full potential and overcome the
                barriers they face due to societal norms and discrimination.
              </p>
              <div className="aboutSectionQuote">
                <p className="aboutSectionQIcon">
                  <RiDoubleQuotesL />
                </p>
                <p className="aboutSectionQContent">
                  "I am not free while any woman is unfree, even when her
                  shackles are very different from my own." <br />
                  by Audre Lorde
                </p>
              </div>
              <p>
                One of the key aspects of our organization's work is education.
                We recognize the importance of education in empowering women and
                enabling them to pursue their goals and dreams.
              </p>
              <p className="margin-bottom">
                Another focus of our organization is career development. We
                believe that women should have equal access to opportunities in
                the workforce and be able to advance in their careers based on
                their skills and merits.
              </p>
              <p className="margin-bottom">
                Our organization is dedicated to promoting social justice and
                advocating for women's rights. You believe that women should
                have equal rights and opportunities in all areas of life, and
                you work to raise awareness about gender-based discrimination
                and violence. Our organization engages in advocacy efforts to
                promote gender equality and to ensure that women's voices are
                heard.
              </p>
              <CommonButton text="About Us" />
            </div>
          </div>
          <div className="ascRight">
            <Image src={aboutSection} alt="About Image" />
            {/* <div className="ascRight1">
              <Image src={aboutSection1} />
            </div>
            <div className="ascRight2">
              <Image src={aboutSection2} />
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
