import React from "react";
import "./style.scss";

export default function News() {
  return (
    <section className="news">
      <div className="newsHeader">
        <h1>News & Updates</h1>
      </div>
      <div className="newsContainer">
        <div className="newsComingSoon">
          <h2>
            Welcome to the "News & Updates" page of Chal Naari, a women
            empowerment NGO.
          </h2>
          <p>
            We are currently working on several exciting projects that we can't
            wait to share with you. From community outreach programs to
            fundraising events, we are committed to making a meaningful
            difference in the lives of women.
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
