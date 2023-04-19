import React from "react";
import "./style.scss";
import Link from "next/link";
import { HiUserGroup } from "react-icons/hi";

export const metadata = {
  title: "Join Social Communities - Chal Naari: Ashes To Re-birth",
  description:
    " Join Chal Naari's social community and connect with like-minded individuals who share our mission of empowering women and girls. Engage in meaningful discussions, share your experiences, and support our efforts to create a brighter future for women and girls everywhere.",
  keywords:
    "women empowerment, gender equality, education, economic empowerment, health, advocacy, community outreach, social impact, women's rights, NGO, Chal Naari, social community, forums, discussions, women's network, support groups, online community, join us, collaborate",
};

const Social = () => {
  return (
    <section className="social">
      <div className="socialHeader">
        <h1>Join Our Social Communities</h1>
      </div>
      <div className="socialContainer">
        <div className="socialFollow">
          <div className="socialFacebook">
            <h2>Facebook Group</h2>
            <h3>Join Chal Naari</h3>
            <p>
              Welcome to the Chal Naari Facebook group! Our group is a community
              of empowered women who support and uplift each other.{" "}
            </p>
            <p>
              In this group, you'll find a safe and inclusive space where you
              can share your thoughts, experiences, and ideas with like-minded
              women.
            </p>
            <div className="facebookFollowBtn">
              <Link href="/">
                <HiUserGroup className="followIcon" /> Join Group
              </Link>
            </div>
          </div>
          <div className="socialTwitter">
            <h2>Twitter Community</h2>
            <h3>Join Chal Naari</h3>
            <p>
              Welcome to Chal Naari's Twitter page! We trying creating a world
              where all women have the resources and support they need to
              thrive.
            </p>
            <p>
              We believe in the power of community and collaboration, and we're
              excited to connect with like-minded individuals who share our
              vision.
            </p>
            <div className="twitterFollowBtn">
              <Link href="/">
                <HiUserGroup className="followIcon" /> Follow Us
              </Link>
            </div>
          </div>
        </div>
        <div className="socialFollow2">
          <div className="socialInsta">
            <h2>Instagram Page</h2>
            <h3>Join Chal Naari</h3>
            <p>
              Our Instagram page is a community of empowered women who support
              and encourage each other.{" "}
            </p>
            <p>
              Whether you're looking for inspiration, motivation, or resources
              to help you on your own journey, we've got you covered.
            </p>
            <div className="instaFollowBtn">
              <Link href="/">
                <HiUserGroup className="followIcon" /> Follow Us
              </Link>
            </div>
          </div>

          <div className="socialWhats">
            <h2>Whatsapp Group</h2>
            <h3>Join Chal Naari</h3>
            <p>
              Join our WhatsApp group for a safe and inclusive space to share
              your thoughts, experiences, and ideas with like-minded women.
            </p>
            <p>
              We believe in the power of community and connection, and we're
              excited to have you join us!
            </p>
            <div className="whatsFollowBtn">
              <Link href="/">
                <HiUserGroup className="followIcon" /> Join Group
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;
