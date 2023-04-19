import React from "react";
import "./style.scss";

export const metadata = {
  title: "Donation Policy - Chal Naari: Ashes To Re-birth",
  description:
    "Empower women and girls with Chal Naari. Read our donation policy to learn how you can make a difference. Help us promote gender equality today.",
};

const page = () => {
  return (
    <section className="dPolicy">
      <div className="dPolicyHeader">
        <h1>Donation Policy</h1>
      </div>
      <div className="dPolicyContainer">
        <div className="dPolicyComingSoon">
          <h2>
            Welcome to the "Donation Policy" page of Chal Naari, a women
            empowerment NGO.
          </h2>
          <p>
            Our donation policy is currently being updated to reflect our
            commitment to transparency and accountability. We want to ensure
            that our donors are fully informed about how their contributions
            will be used and the impact they will make.
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

export default page;
