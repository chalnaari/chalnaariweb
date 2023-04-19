import React from "react";
import "./style.scss";
import Link from "next/link";

export const metadata = {
  title: "Disclaimer - Chal Naari: Ashes To Re-birth",
  description:
    "Chal Naari's disclaimer outlines the limitations of liability associated with the use of our website and the information provided on it. While we strive to provide accurate and up-to-date information, we do not make any warranties or representations regarding the completeness, accuracy, reliability, suitability, or availability of the information provided. Learn more about the limitations of liability associated with using our website.",
  keywords:
    "women empowerment, gender equality, education, economic empowerment, health, advocacy, community outreach, social impact, women's rights, NGO, Chal Naari, disclaimer, website disclaimer, liability, accuracy, completeness, reliability, information, advice, user responsibility, governing law, jurisdiction",
};

const Dislaimer = () => {
  return (
    <section className="dis">
      <div className="disHeader">
        <h1>Disclaimer for Chal Naari</h1>
      </div>
      <div className="disContainer">
        <p>
          If you require any more information or have any questions about our
          site's disclaimer, please feel free to contact us by email at{" "}
          <Link href="/">info@chalnaari.com</Link>.
        </p>

        <h2>Disclaimers for Chal Naari</h2>

        <p>
          All the information on this website -{" "}
          <Link href="https://chalnaari.com">Chal Naari</Link> - is published in
          good faith and for general information purpose only. Chal Naari does
          not make any warranties about the completeness, reliability and
          accuracy of this information. Any action you take upon the information
          you find on this website (Chal Naari), is strictly at your own risk.
          Chal Naari will not be liable for any losses and/or damages in
          connection with the use of our website.
        </p>

        <p>
          From our website, you can visit other websites by following hyperlinks
          to such external sites. While we strive to provide only quality links
          to useful and ethical websites, we have no control over the content
          and nature of these sites. These links to other websites do not imply
          a recommendation for all the content found on these sites. Site owners
          and content may change without notice and may occur before we have the
          opportunity to remove a link which may have gone 'bad'.
        </p>

        <p>
          Please be also aware that when you leave our website, other sites may
          have different privacy policies and terms which are beyond our
          control. Please be sure to check the Privacy Policies of these sites
          as well as their "Terms of Service" before engaging in any business or
          uploading any information.
        </p>

        <h2>Consent</h2>

        <p>
          By using our website, you hereby consent to our disclaimer and agree
          to its terms.
        </p>

        <h2>Update</h2>

        <p>
          Should we update, amend or make any changes to this document, those
          changes will be prominently posted here.
        </p>
      </div>
    </section>
  );
};

export default Dislaimer;
