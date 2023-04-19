import React from "react";
import "./style.scss";

export const metadata = {
  title: "Stories - Chal Naari: Ashes To Re-birth",
  description:
    "Discover empowering stories of women breaking barriers and achieving greatness. Join Chal Naari in celebrating the resilience and strength of women from all walks of life.",
};

const Stories = () => {
  return (
    <section className="stories">
      <div className="storiesHeader">
        <h1>Stories</h1>
      </div>
      <div className="storiesContainer">
        <div className="storiesComingSoon">
          <h2>
            Welcome to the "Stories" page of Chal Naari, a women empowerment NGO
            committed to promoting gender equality and women's empowerment.
          </h2>
          <p>
            Stay tuned for our upcoming Stories section, where you'll find a
            collection of inspiring and empowering stories that will motivate
            and uplift you.
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

export default Stories;
