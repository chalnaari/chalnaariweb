import React from "react";
import "./style.scss";

export const metadata = {
  title: "Events & Opportunities - Chal Naari: Ashes To Re-birth",
  description:
    "Join Chal Naari's community of changemakers and advance women's empowerment - stay updated on events and opportunities.",
};

const Events = () => {
  return (
    <section className="events">
      <div className="eventsHeader">
        <h1>Events & Opportunities</h1>
      </div>
      <div className="eventsContainer">
        <div className="eventsComingSoon">
          <h2>
            Welcome to the "Events and Opportunities" page of Chal Naari, a
            women empowerment NGO.
          </h2>
          <p>
            We'll soon be adding a dynamic section featuring a wide range of
            events and opportunities for women. From workshops and seminars to
            networking events and job openings, we'll help you connect, learn,
            and grow.
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

export default Events;
