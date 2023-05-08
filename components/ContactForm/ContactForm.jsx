"use client";

import React, { useState } from "react";
import "./style.scss";

function ContactForm() {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    country: "",
    company: "",
    reason: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setMessage((prevMessage) => ({ ...prevMessage, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { Content_Type: "application/json" },
        body: JSON.stringify({
          name: message.name,
          email: message.email,
          phone: message.phone,
          website: message.website,
          country: message.country,
          company: message.company,
          reason: message.reason,
          message: message.message,
        }),
      });
      // Set the status based on the response from the API route
      if (response.status === 200) {
        setMessage({
          name: "",
          email: "",
          phone: "",

          reason: "",
          message: "",
        });
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={message.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={message.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="phone"
          placeholder="Phone"
          name="phone"
          value={message.phone}
          onChange={handleChange}
        />
      </div>
      <div>
        <select name="reason" value={message.reason} onChange={handleChange}>
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
        <textarea
          placeholder="Enter Your Message"
          rows="5"
          name="message"
          value={message.message}
          onChange={handleChange}
        />
      </div>
      {status === "success" ? (
        <p className="contactSent margin1">
          Thank you for submitting your message. We will get back to you as soon
          as possible.
        </p>
      ) : (
        ""
      )}
      {status === "error" ? (
        <p className="contactError margin1">
          Oops, there was an error submitting the form. Please try again later.
        </p>
      ) : (
        ""
      )}
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
