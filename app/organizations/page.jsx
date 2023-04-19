import React from "react";
import "./style.scss";

export const metadata = {
  title: "Organizations - Chal Naari: Ashes To Re-birth",
  description:
    "Learn more about Chal Naari, an NGO committed to empowering women in our community. Our organizations page offers insights into our mission, values, and initiatives, showcasing our dedication to creating a supportive and inclusive environment where women can thrive.",
};

export default function Organizations() {
  return (
    <section className="organ">
      <div className="organHeader">
        <h1>Organizations</h1>
      </div>
      <div className="organContainer">
        <div className="organComingSoon">
          <h2>
            Welcome to the "Organizations" page of Chal Naari, a women
            empowerment NGO.
          </h2>
          <p>
            We are in the process of updating our organization page with more
            information about our mission, vision, and impact. In the meantime,
            please feel free to connect with us on our social media channels and
            stay tuned for updates.
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
