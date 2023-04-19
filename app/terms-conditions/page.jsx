import React from "react";
import "./style.scss";
import Link from "next/link";

export const metadata = {
  title: "Terms and Conditions - Chal Naari: Ashes To Re-birth",
  description:
    "Chal Naari's terms and conditions outline the rules and guidelines for the use of our website. By accessing our website, you agree to comply with our terms and conditions. Learn more about the terms of use, disclaimers, and limitations of liability associated with using our website.",
  keywords:
    "women empowerment, gender equality, education, economic empowerment, health, advocacy, community outreach, social impact, women's rights, NGO, Chal Naari, terms and conditions, legal, user agreement, website usage, intellectual property, liability, disclaimers, governing law, jurisdiction",
};

const TermsConditions = () => {
  return (
    <section className="tc">
      <div className="tcHeader">
        <h1>Terms and Conditions for Chal Naari</h1>
      </div>
      <div className="tcContainer">
        <h2>Introduction</h2>

        <p>
          These Website Standard Terms and Conditions written on this webpage
          shall manage your use of our website, Chal Naari accessible at{" "}
          <Link href="https://chalnaari.com">Chal Naari</Link>
        </p>

        <p>
          These Terms will be applied fully and affect to your use of this
          Website. By using this Website, you agreed to accept all terms and
          conditions written in here. You must not use this Website if you
          disagree with any of these Website Standard Terms and Conditions.
        </p>

        <p>
          Minors or people below 18 years old are not allowed to use this
          Website.
        </p>

        <h2>Intellectual Property Rights</h2>

        <p>
          Other than the content you own, under these Terms, Chal Naari and/or
          its licensors own all the intellectual property rights and materials
          contained in this Website.
        </p>

        <p>
          You are granted limited license only for purposes of viewing the
          material contained on this Website.
        </p>

        <h2>Restrictions</h2>

        <p>You are specifically restricted from all of the following:</p>

        <ul>
          <li>publishing any Website material in any other media;</li>
          <li>
            selling, sublicensing and/or otherwise commercializing any Website
            material;
          </li>
          <li>publicly performing and/or showing any Website material;</li>
          <li>
            using this Website in any way that is or may be damaging to this
            Website;
          </li>
          <li>
            using this Website in any way that impacts user access to this
            Website;
          </li>
          <li>
            using this Website contrary to applicable laws and regulations, or
            in any way may cause harm to the Website, or to any person or
            business entity;
          </li>
          <li>
            engaging in any data mining, data harvesting, data extracting or any
            other similar activity in relation to this Website;
          </li>
          <li>using this Website to engage in any advertising or marketing.</li>
        </ul>

        <p>
          Certain areas of this Website are restricted from being access by you
          and Chal Naari may further restrict access by you to any areas of this
          Website, at any time, in absolute discretion. Any user ID and password
          you may have for this Website are confidential and you must maintain
          confidentiality as well.
        </p>

        <h2>Your Content</h2>

        <p>
          In these Website Standard Terms and Conditions, "Your Content" shall
          mean any audio, video text, images or other material you choose to
          display on this Website. By displaying Your Content, you grant Chal
          Naari a non-exclusive, worldwide irrevocable, sub licensable license
          to use, reproduce, adapt, publish, translate and distribute it in any
          and all media.
        </p>

        <p>
          Your Content must be your own and must not be invading any
          third-party's rights. Chal Naari reserves the right to remove any of
          Your Content from this Website at any time without notice.
        </p>

        <h2>No warranties</h2>

        <p>
          This Website is provided "as is," with all faults, and Chal Naari
          express no representations or warranties, of any kind related to this
          Website or the materials contained on this Website. Also, nothing
          contained on this Website shall be interpreted as advising you.
        </p>

        <h2>Limitation of liability</h2>

        <p>
          In no event shall Chal Naari, nor any of its officers, directors and
          employees, shall be held liable for anything arising out of or in any
          way connected with your use of this Website whether such liability is
          under contract.  Chal Naari, including its officers, directors and
          employees shall not be held liable for any indirect, consequential or
          special liability arising out of or in any way related to your use of
          this Website.
        </p>

        <h2>Indemnification</h2>

        <p>
          You hereby indemnify to the fullest extent Chal Naari from and against
          any and/or all liabilities, costs, demands, causes of action, damages
          and expenses arising in any way related to your breach of any of the
          provisions of these Terms.
        </p>

        <h2>Severability</h2>

        <p>
          If any provision of these Terms is found to be invalid under any
          applicable law, such provisions shall be deleted without affecting the
          remaining provisions herein.
        </p>

        <h2>Variation of Terms</h2>

        <p>
          Chal Naari is permitted to revise these Terms at any time as it sees
          fit, and by using this Website you are expected to review these Terms
          on a regular basis.
        </p>

        <h2>Assignment</h2>

        <p>
          The Chal Naari is allowed to assign, transfer, and subcontract its
          rights and/or obligations under these Terms without any notification.
          However, you are not allowed to assign, transfer, or subcontract any
          of your rights and/or obligations under these Terms.
        </p>

        <h2>Entire Agreement</h2>

        <p>
          These Terms constitute the entire agreement between Chal Naari and you
          in relation to your use of this Website, and supersede all prior
          agreements and understandings.
        </p>

        <h2>Governing Law & Jurisdiction</h2>

        <p>
          These Terms will be governed by and interpreted in accordance with the
          laws of the State of in, and you submit to the non-exclusive
          jurisdiction of the state and federal courts located in in for the
          resolution of any disputes.
        </p>
      </div>
    </section>
  );
};

export default TermsConditions;
