import React from "react";
import "./style.scss";
import pillar1 from "../../public/pillar1.png";
import pillar2 from "../../public/pillar2.png";
import pillar3 from "../../public/pillar3.png";
import pillar4 from "../../public/pillar4.png";
import Image from "next/image";
import { RiLinksFill } from "react-icons/ri";

export const metadata = {
  title: "About Chal Naari - Ashes To Re-birth",
  description:
    "Chal Naari is a women empowerment NGO dedicated to supporting and uplifting women in need. Our mission is to provide education, training, and resources to help women build better lives for themselves and their families. Learn more about our organization, our team, and how we're making a positive impact in the lives of women and girls.",
  keywords:
    "women empowerment, gender equality, education, economic empowerment, health, advocacy, community outreach, social impact, women's rights, NGO, Chal Naari, mission, vision, history, team",
};

const About = () => {
  return (
    <section className="about">
      <div className="aboutHeader">
        <h1>About Chal Naari</h1>
      </div>
      <div className="aboutContainer">
        <p>
          Chal Naari is a women empowerment NGO dedicated to promoting the
          rights and well-being of women and girls in all aspects of life. Our
          organization was founded with the vision of creating a world where all
          women have access to education, healthcare, and opportunities to
          succeed in their personal and professional lives.
        </p>
        <p className="margin-more">
          At Chal Naari, we believe that women are the backbone of society, and
          empowering them is essential for creating a just and equal world. Our
          mission is to work towards this goal by providing women with the tools
          and resources they need to achieve their full potential. We strive to
          promote gender equality, end discrimination and violence against
          women, and ensure that women have equal access to education,
          employment, and healthcare.
        </p>
        <p>
          Our organization has four pillars that guide our work:{" "}
          <b>economic and financial empowerment</b>,{" "}
          <b>education and skill development</b>, <b>health and well-being</b>,
          and <b>advocacy and awareness</b>.
        </p>
        <div className="aboutContainerPillar1">
          <div className="acp1Left">
            <h2>
              <RiLinksFill className="aboutPillarIcons" /> Economic and
              Financial Empowerment
            </h2>
            <p>
              At Chal Naari, we believe that economic and financial empowerment
              is a crucial factor in women's overall empowerment. We work to
              create opportunities for women to become financially independent
              by providing them with access to financial resources, training,
              and support.
            </p>
            <p>
              Through our microfinance programs, we provide women with the
              resources they need to start their own businesses or pursue career
              opportunities. Our entrepreneurship development programs equip
              women with the skills and knowledge they need to become successful
              entrepreneurs, while our vocational training programs provide them
              with the necessary technical skills to pursue careers in various
              industries.
            </p>
          </div>
          <div className="acp1Right">
            <Image src={pillar1} />
          </div>
        </div>
        <div className="aboutContainerPillar2">
          <div className="acp2Left">
            <Image src={pillar2} />
          </div>
          <div className="acp2Right">
            <h2>
              <RiLinksFill className="aboutPillarIcons" /> Education and Skill
              Development
            </h2>
            <p>
              We believe that education and skill development are essential for
              women's personal growth and development. At Chal Naari, we provide
              education and training programs that help women acquire the skills
              they need to succeed in their chosen fields.
            </p>
            <p>
              Our academic programs include courses in subjects such as
              business, technology, and the humanities, while our vocational
              training programs provide practical training in fields such as
              healthcare, hospitality, and construction. We also offer mentoring
              and career counseling services to help women identify their
              strengths and goals and develop plans to achieve them.
              Additionally, we provide scholarship programs that help women
              access education and training opportunities that might otherwise
              be out of reach.
            </p>
          </div>
        </div>
        <div className="aboutContainerPillar3">
          <div className="acp3Left">
            <h2>
              <RiLinksFill className="aboutPillarIcons" /> Health and Well-being
            </h2>
            <p>
              Chal Naari recognizes that women's health and well-being are
              critical factors in their overall empowerment. We offer various
              programs and initiatives aimed at promoting women's health and
              well-being, including reproductive health, mental health, and
              nutrition.
            </p>
            <p>
              Our programs provide women with access to quality health care
              services, awareness campaigns, and training on preventive health
              measures. We also work to create safe spaces for women to discuss
              their health concerns and provide them with the resources they
              need to make informed decisions about their health.
            </p>
          </div>
          <div className="acp3Right">
            <Image src={pillar3} />
          </div>
        </div>
        <div className="aboutContainerPillar4">
          <div className="acp4Left">
            <Image src={pillar4} />
          </div>
          <div className="acp4Right">
            <h2>
              <RiLinksFill className="aboutPillarIcons" /> Advocacy and
              Awareness
            </h2>
            <p>
              Advocacy and awareness are critical components of Chal Naari's
              mission to empower women. Our advocacy efforts aim to bring about
              policy change and social reform that promotes gender equality and
              supports women's rights. We engage with government agencies,
              community leaders, and other stakeholders to create a more just
              and equitable society.
            </p>
            <p>
              We also work to raise awareness about women's rights, gender-based
              violence, and discrimination through campaigns, workshops, and
              events. Through these efforts, we aim to build a strong and
              supportive community that champions gender equality and women's
              rights.
            </p>
            <p>
              Chal Naari's advocacy efforts focus on promoting policies that
              support women's economic, social, and political empowerment.
            </p>
          </div>
        </div>
        <p className="margin-more">
          Chal Naari is an organization that is committed to promoting gender
          equality and empowering women in India. We believe that by providing
          women with the resources they need to become financially independent,
          access education and training opportunities, and promote their health
          and well-being, we can contribute to a more equitable and just
          society. Join us in our mission to empower women and create a better
          future for all.
        </p>
        <div className="aboutMissionVision">
          <h2>
            <RiLinksFill className="aboutPillarIcons" /> Our Mission:
          </h2>
          <p>
            At Chal Naari, our mission is to empower women and girls from all
            backgrounds by providing them with the necessary tools, resources,
            and education to help them reach their full potential. We strive to
            create a world where every woman and girl has the opportunity to
            live a life free from discrimination and gender-based violence.
          </p>

          <h2>
            <RiLinksFill className="aboutPillarIcons" /> Vision:
          </h2>

          <p>
            We believe that women's empowerment is not just a matter of fairness
            and equality; it is also crucial for the overall well-being of
            society. When women are empowered, they are more likely to invest in
            their families and communities, which can lead to improved health,
            education, and economic outcomes for all.
          </p>
          <p>
            Through our programs and initiatives, we aim to break down barriers
            and create opportunities for women and girls to thrive. We envision
            a future where gender equality is the norm, and women are fully
            empowered to lead in all areas of society.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
