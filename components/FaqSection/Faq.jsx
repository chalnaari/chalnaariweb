"use client";
import React from "react";
import "./style.scss";
import { FaqData } from "./FaqData";

const Faq = () => {
  return (
    <section className="faq">
      <div className="faqHead">
        <h2>Frequently Asked Questions.</h2>
      </div>
      <div className="faqContainer">
        {FaqData.map((faq) => {
          return (
            <details key={faq.id}>
              <summary>{faq.question}</summary>
              {faq.answer}
            </details>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
