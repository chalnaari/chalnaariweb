import React from "react";
import "./style.scss";
import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
  RiWhatsappFill,
} from "react-icons/ri";

export const metadata = {
  title: "Contact Us - Chal Naari: Ashes To Re-birth",
  description:
    "Contact Chal Naari, a women empowerment NGO dedicated to supporting and uplifting women in need. Get in touch with us to learn more about our programs, services, and how you can help make a positive impact in the lives of women and girls. Our team is here to answer your questions and provide support.",
  keywords:
    "women empowerment, gender equality, education, economic empowerment, health, advocacy, community outreach, social impact, women's rights, NGO, Chal Naari, contact us, get in touch, support, donate, volunteer, partnerships",
};

const Contact = () => {
  return (
    <section className="contact">
      <div className="contactHeader">
        <h1>Contact Us</h1>
      </div>
      <div className="contactContainer">
        <div className="ccLeft">
          <p>
            Thank you for your interest in Chal Naari. We welcome any questions
            or feedback you may have about our organization, programs, or
            initiatives.
          </p>
          <h2>You can reach us through the following channels:</h2>
          <h3>Email:</h3>
          <p>
            For any inquiries, please email us at{" "}
            <a href="/">info@chalnaari.org</a>
          </p>

          {/* <h3>Phone:</h3>
          <p>
            You can also reach us by phone at <a href="/">+91-XXXXXXXXXX</a>.
            Our office hours are from Monday to Friday, 9:00 AM to 6:00 PM IST.
          </p> */}
          <h3>Social Media:</h3>
          <p>
            You can also connect with us on social media. We are active on
            Facebook, Twitter, Instagram, and LinkedIn. Follow us for the latest
            news and updates on our programs and initiatives.
          </p>
          <div className="contactSocial">
            <div className="cSocialChild">
              <a href="/">
                <RiFacebookBoxFill />
              </a>
            </div>
            <div className="cSocialChild">
              <a href="/">
                <RiLinkedinBoxFill />
              </a>
            </div>
            <div className="cSocialChild">
              <a href="/">
                <RiTwitterFill />
              </a>
            </div>
            <div className="cSocialChild">
              <a href="/">
                <RiInstagramFill />
              </a>
            </div>
            <div className="cSocialChild">
              <a href="/">
                <RiWhatsappFill />
              </a>
            </div>
          </div>
          <h3>Address:</h3>
          <p>
            If you are in the area, we would be happy to have you visit our
            offices. Our address is:
          </p>
          <p>
            Chal Naari
            <br />
            Noida, UP
            <br />
            India
          </p>
        </div>
        <div className="ccRight">
          <div className="ccRightForm">
            <form>
              <div>
                <input type="text" placeholder="Name" />
              </div>
              <div>
                <input type="email" placeholder="Email" />
              </div>
              <div>
                <input type="phone" placeholder="Phone" />
              </div>
              <div>
                <select>
                  <option>Reason For Contacting</option>
                  <option>General Inquiry</option>
                  <option>Donation Inquiry</option>
                  <option>Volunteer Inquiry</option>
                  <option>Partnerships Inquiry</option>
                  <option>Media Inquiry</option>
                  <option>Sponsorship Inquiry</option>
                  <option>Feedback or Testimonial</option>
                  <option>Report a Problem or Issue</option>
                  <option>Job or Career Opportunities Inquiry</option>
                  <option>Event Inquiry</option>
                  <option>Other (write it in message box)</option>
                </select>
              </div>
              <div>
                <textarea placeholder="Enter Your Message" rows="5" />
              </div>
              <button>Submit</button>
            </form>

            <p>
              Please note that it may take us a few business days to reply to
              your inquiry, but we will do our best to get back to you as soon
              as we can. In the meantime, please feel free to browse our website
              to learn more about our programs and initiatives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
