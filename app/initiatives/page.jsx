import React from "react";
import "./style.scss";
import { RiLinksFill } from "react-icons/ri";
import a from "next/link";

export const metadata = {
  title: "Initiatives - Chal Naari: Ashes To Re-birth",
  description:
    "Discover Chal Naari's initiatives to empower women and girls in areas such as education, economic empowerment, health, advocacy, and community engagement. Learn how you can support our mission to transform communities and create a brighter future.",
};

const page = () => {
  return (
    <section className="initiatives">
      <div className="initHeader">
        <h1>Initiatives</h1>
        <h2>
          "Empowering women, transforming communities: Chal Naari's initiatives
          for a brighter future."
        </h2>
      </div>
      <div className="initContainer">
        <p>
          At Chal Naari, we believe in empowering women and girls through
          education, health, economic, and social initiatives. Our mission is to
          create an equitable society where every woman has the opportunity to
          achieve her full potential and live a life of dignity.
        </p>
        <p>
          Through our various initiatives, we strive to promote gender equality,
          eliminate discrimination, and empower women and girls to take charge
          of their lives. We aim to create a world where every woman has access
          to education, healthcare, and economic opportunities.
        </p>

        <ul>
          <h3>We provide & conduct programs that focus on:</h3>
          <li>Improving literacy levels among girls and young women</li>
          <li>Vocational Training</li>
          <li>Digital Literacy</li>
          <li>Women's Issues</li>
          <li>Gender-Based Violence</li>
          <li>Women's Right</li>
          <li>Women Empowerment</li>
          <li>Gender Equality</li>
          <li>Entrepreneurship Training</li>
          <li>Microfinance</li>
          <li>Samuhik Vivah</li>
        </ul>

        <ul>
          <h3>
            We conduct health camps in underserved communities to promote
            women's health and hygiene, including:
          </h3>
          <li>Reproductive Health</li>
          <li>Maternal & Child Health</li>
          <li>General Health Awareness</li>
        </ul>

        <p className="margin-more">
          We provide entrepreneurship training, microfinance, and other support
          to help women set up and manage their businesses, thereby promoting
          economic empowerment. We engage volunteers to work on various
          initiatives, including fundraising, advocacy, and community outreach
          programs.
        </p>

        <div className="initiativeBoxParent">
          <h2>Our Initiatives Includes:</h2>
          <div className="initiativesBoxes">
            <div className="initiativeBox">
              <h3>Educational Programs</h3>
            </div>
            <div className="initiativeBox">
              <h3>Health Initiatives</h3>
            </div>
            <div className="initiativeBox">
              <h3>Community Outreach</h3>
            </div>
          </div>
          <div className="initiativesBoxes">
            <div className="initiativeBox">
              <h3>Advocacy</h3>
            </div>
            <div className="initiativeBox">
              <h3>Economic Empowerment</h3>
            </div>
            <div className="initiativeBox">
              <h3>Volunteer Engagement</h3>
            </div>
          </div>
        </div>

        <h2>Chal Naari Initiatives Impacts</h2>
        <p>
          As a Women Empowerment NGO, the impact of our initiatives can be
          significant in empowering women and creating a more equitable society.
          Here are some potential impacts of the initiatives undertaken by Chal
          Naari:
        </p>
        <h3>
          <RiLinksFill className="initImpactIcons" /> Increased education:
        </h3>
        <p>
          By promoting education among girls and young women, we can help to
          break the cycle of poverty and increase economic opportunities.
          Improved literacy levels also lead to better health outcomes and a
          greater awareness of social issues.
        </p>
        <div className="border-bottom"></div>
        <h3>
          <RiLinksFill className="initImpactIcons" /> Improved health and
          hygiene:
        </h3>
        <p>
          By improving women's health and hygiene, we can reduce maternal and
          child mortality rates, prevent the spread of disease, and improve
          quality of life.
        </p>
        <div className="border-bottom"></div>
        <h3>
          <RiLinksFill className="initImpactIcons" /> Enhanced social inclusion:
        </h3>
        <p>
          By raising awareness about women's issues and promoting social
          inclusion, we can create a more equitable and accepting society, where
          women feel safe and supported.
        </p>
        <div className="border-bottom"></div>
        <h3>
          <RiLinksFill className="initImpactIcons" /> Increased advocacy:
        </h3>
        <p>
          By advocating for policies and programs that support women's
          empowerment and gender equality, we can influence change at the local,
          regional, and national levels, and create a more just and equitable
          society.
        </p>
        <div className="border-bottom"></div>
        <h3>
          <RiLinksFill className="initImpactIcons" /> Economic empowerment:
        </h3>
        <p>
          By promoting entrepreneurship and providing microfinance and other
          support, we can help women to become self-sufficient and financially
          independent, which can have a positive ripple effect on their families
          and communities.
        </p>
        <div className="border-bottom"></div>
        <h3>
          <RiLinksFill className="initImpactIcons" /> Strengthened volunteer
          engagement:
        </h3>
        <p className="margin-more">
          By engaging volunteers and building a strong network of support, we
          can leverage the collective efforts of individuals to create a greater
          impact and achieve our mission.
        </p>

        <div className="initVOpporContainer">
          <h2>Volunteer Opportunities</h2>
          <p>
            As a Women Empowerment NGO, Chal Naari offers various volunteer
            opportunities for individuals who are passionate about supporting
            our cause. Here are some volunteer opportunities that we offer:
          </p>
          <div className="initVOpporChilds">
            <div className="initVOpporChild">
              <h3>
                <RiLinksFill className="initImpactIcons" /> Education support:
              </h3>
              <p>
                Volunteers can assist in providing academic support to girls and
                young women, such as teaching English, Math, Science, and other
                subjects.
              </p>
            </div>
            <div className="initVOpporChild">
              <h3>
                <RiLinksFill className="initImpactIcons" /> Health and hygiene:
              </h3>
              <p>
                Volunteers can help promote hygiene practices and provide
                support for health education programs.
              </p>
            </div>
          </div>
          <div className="initVOpporChilds">
            <div className="initVOpporChild">
              <h3>
                <RiLinksFill className="initImpactIcons" /> Advocacy and
                outreach:
              </h3>
              <p>
                Volunteers can help raise awareness about women's issues and
                advocate for policies and programs that support gender equality.
              </p>
            </div>
            <div className="initVOpporChild">
              <h3>
                <RiLinksFill className="initImpactIcons" /> Entrepreneurship
                support:
              </h3>
              <p>
                Volunteers can provide support for microfinance and
                entrepreneurship programs aimed at empowering women to become
                financially independent.
              </p>
            </div>
          </div>
          <div className="initVOpporChilds">
            <div className="initVOpporChild">
              <h3>
                <RiLinksFill className="initImpactIcons" /> Event management:
              </h3>
              <p>
                Volunteers can help organize events and fundraisers to raise
                awareness and funds for our initiatives.
              </p>
            </div>
            <div className="initVOpporChild">
              <h3>
                <RiLinksFill className="initImpactIcons" /> Social media and
                digital marketing:
              </h3>
              <p>
                Volunteers can help manage our social media presence and create
                digital content to promote our initiatives.
              </p>
            </div>
          </div>
          <div className="initVOpporChilds">
            <div className="initVOpporChild">
              <h3>
                <RiLinksFill className="initImpactIcons" /> Translation and
                interpretation:
              </h3>
              <p>
                Volunteers with language skills can assist in translating
                documents and interpreting for non-native speakers. .
              </p>
            </div>
            <div className="initVOpporChild">
              <h3>
                <RiLinksFill className="initImpactIcons" /> Social media and
                digital marketing:
              </h3>
              <p>
                Volunteers can help manage our social media presence and create
                digital content to promote our initiatives.
              </p>
            </div>
          </div>
          <p>
            Overall, volunteering with Chal Naari can be a rewarding experience,
            allowing individuals to make a meaningful impact on the lives of
            women and girls. Volunteers can contribute their time and skills in
            a variety of ways, and we welcome individuals who are committed to
            our mission and values.
          </p>
        </div>

        <div className="initCTA">
          <h2>Take Action Now</h2>
          <div className="initCTAContainer">
            <div className="initCTAChild">
              <a href="/donate">Donate</a>
            </div>
            <div className="initCTAChild">
              <a href="/volunteer">Volunteer</a>
            </div>
            <div className="initCTAChild">
              <a href="/contact">Join</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
