import React from "react";
import "./style.scss";

export const metadata = {
  title: "Blogs - Chal Naari: Ashes To Re-birth",
  description:
    "Empowering women and promoting gender equality - explore inspiring stories on Chal Naari's blog.",
};

const Blogs = () => {
  return (
    <section className="blogs">
      <div className="blogsHeader">
        <h1>Blogs</h1>
      </div>
      <div className="blogsContainer">
        <div className="blogsComingSoon">
          <h2>
            Welcome to the "Blogs" page of Chal Naari, a women empowerment NGO.
          </h2>
          <p>
            We're currently developing a dynamic blog section featuring diverse
            content related to women's issues, empowerment, and leadership.
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

export default Blogs;
