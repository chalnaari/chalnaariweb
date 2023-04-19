import React from "react";
import "./style.scss";

export const metadata = {
  title: "Volunteer - Chal Naari: Ashes To Re-birth",
  description:
    "Volunteer with Chal Naari and make a real difference in the lives of women in our community. We are currently developing exciting volunteer opportunities for passionate individuals interested in event planning, community outreach, and fundraising. Stay tuned for updates on our volunteer programs.",
};

export default function Volunteer() {
  return (
    <section className="volunteer">
      <div className="volunteerHeader">
        <h1>Volunteer</h1>
      </div>
      <div className="volunteerContainer">
        <div className="volunteerComingSoon">
          <h2>
            Welcome to the "Volunteer" page of Chal Naari, a women empowerment
            NGO.
          </h2>
          <p>
            We are currently working on exciting volunteer opportunities that
            will allow you to make a real difference in the lives of women.
            Whether you are interested in event planning, community outreach, or
            fundraising, we have a variety of roles that can suit your interests
            and skills.
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
