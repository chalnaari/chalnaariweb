import React from "react";
import "./style.scss";

export const metadata = {
  title: "Our Team - Chal Naari: Ashes To Re-birth",
  description:
    "Meet our passionate team driving Chal Naari's mission to empower women and promote gender equality.",
};

const Team = () => {
  return (
    <section className="teams">
      <div className="teamsHeader">
        <h1>Our Team</h1>
      </div>
      <div className="teamsContainer">
        <div className="teamsComingSoon">
          <h2>
            Welcome to the "Our Team" page of Chal Naari, a women empowerment
            NGO.
          </h2>
          <p>
            We're currently developing a dynamic team section featuring
            passionate and dedicated team of professionals from diverse
            backgrounds, working tirelessly to make a difference in the lives of
            women around the world.
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
};

export default Team;
