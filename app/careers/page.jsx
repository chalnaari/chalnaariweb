import React from "react";
import "./style.scss";

export const metadata = {
  title: "Careers - Chal Naari: Ashes To Re-birth",
  description:
    "Join Chal Naari, an NGO dedicated to empowering women in our community. We are building a team of passionate and innovative individuals committed to making a difference. Stay tuned for exciting career opportunities coming soon.",
};

export default function Careers() {
  return (
    <section className="career">
      <div className="careerHeader">
        <h1>Careers</h1>
      </div>
      <div className="careerContainer">
        <div className="careerComingSoon">
          <h2>
            Welcome to the "Career" page of Chal Naari, a women empowerment NGO.
          </h2>
          <p>
            We are in the process of finalizing our job listings and application
            process, and we will be updating this page soon with more
            information. In the meantime, please feel free to connect with us on
            our social media channels and stay tuned for updates.
          </p>

          <h3>Coming Soon...</h3>
          <p>
            Explore our website to learn more about our mission, programs, and
            initiatives.
          </p>
        </div>
      </div>
    </section>
  );
}
