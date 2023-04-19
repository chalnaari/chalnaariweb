import React from "react";
import "./style.scss";

export const metadata = {
  title: "Testimonials - Chal Naari: Ashes To Re-birth",
  description:
    "Discover the inspiring stories of women whose lives have been positively impacted by Chal Naari's initiatives. Our testimonials page features feedback from women who have benefited from our programs and services, showcasing our commitment to empowering women in our community.",
};

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonialsHeader">
        <h1>Testimonials</h1>
      </div>
      <div className="testimonialsContainer">
        <div className="testimonialsComingSoon">
          <h2>
            Welcome to the "Testimonials" page of Chal Naari, a women
            empowerment NGO.
          </h2>
          <p>
            We are currently working on a testimonials page where you can read
            about the experiences and stories of women whose lives have been
            positively impacted by our initiatives. We believe that the best way
            to showcase our impact is through the voices of the women we serve.
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
