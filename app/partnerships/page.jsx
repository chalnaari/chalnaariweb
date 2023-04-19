import React from "react";
import "./style.scss";

export const metadata = {
  title: "Partnerships - Chal Naari: Ashes To Re-birth",
  description:
    "Partner with Chal Naari, an NGO dedicated to empowering women in our community. Our partnership programs offer opportunities for individuals, organizations, and businesses to work together towards a common goal.",
};

export default function Partnerships() {
  return (
    <section className="partnerships">
      <div className="partnershipsHeader">
        <h1>Partnerships</h1>
      </div>
      <div className="partnershipsContainer">
        <div className="partnershipsComingSoon">
          <h2>
            Welcome to the "Partnerships" page of Chal Naari, a women
            empowerment NGO.
          </h2>
          <p>
            We are currently working on exciting partnership programs that will
            allow us to work together towards a common goal. Whether you are an
            individual, organization, or business, we welcome partnerships that
            align with our mission and values.
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
