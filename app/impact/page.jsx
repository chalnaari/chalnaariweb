import React from "react";
import "./style.scss";
import { RiLinksFill } from "react-icons/ri";
import Image from "next/image";
import image1 from "../../public/impactVisuals/image1.jpg";
import image2 from "../../public/impactVisuals/image2.jpg";
import image3 from "../../public/impactVisuals/image3.jpg";
import image4 from "../../public/impactVisuals/image4.jpg";
import image5 from "../../public/impactVisuals/image5.jpg";
import image6 from "../../public/impactVisuals/image6.jpg";
import image7 from "../../public/impactVisuals/image7.jpg";
import image8 from "../../public/impactVisuals/image8.jpg";
import image9 from "../../public/impactVisuals/image9.jpg";
import image10 from "../../public/impactVisuals/image10.jpg";
import image11 from "../../public/impactVisuals/image11.jpg";
import image12 from "../../public/impactVisuals/image12.jpg";

export const metadata = {
  title: "",
  description: "",
};

const page = () => {
  return (
    <section className="impact">
      <div className="impactHeader">
        <h1>Impact</h1>
      </div>
      <div className="impactContainer">
        <p>
          Chal Naari's impact has been transformative, as we have been able to
          empower thousands of women and transform communities through our
          programs and services. Our NGO has provided education, vocational
          training, and entrepreneurship opportunities to women, helping them
          become economically independent and confident leaders in their
          communities.
        </p>
        <p>
          Additionally, our advocacy efforts have helped raise awareness about
          women's rights and address gender-based violence. As a result of our
          work, we have seen a positive change in the lives of women and their
          families, and we remain committed to continuing our efforts towards a
          more just and equitable world for all women.
        </p>

        <div className="impactMetricsContainer">
          <div className="impactMetricsBox">
            <div className="impactMBoxLeft">
              <p>5,000</p>
              <p>Women</p>
            </div>
            <div className="impactMBoxRight">
              <h3>
                <RiLinksFill className="impactMIcons" /> Number of Women Reached
              </h3>
              <p>
                Chal Naari has reached over 5,000 women across India with our
                education and vocational training programs.
              </p>
            </div>
          </div>
          <div className="border-bottom"></div>
          <div className="impactMetricsBox">
            <div className="impactMBoxLeft">
              <p>20</p>
              <p>Communities</p>
            </div>
            <div className="impactMBoxRight">
              <h3>
                <RiLinksFill className="impactMIcons" /> Number of Communities
                Impacted
              </h3>
              <p>
                Chal Naari has worked with over 20 communities in India to
                promote gender equality and women's empowerment.
              </p>
            </div>
          </div>
          <div className="border-bottom"></div>
          <div className="impactMetricsBox">
            <div className="impactMBoxLeft">
              <p>70%</p>
              <p>Women</p>
            </div>
            <div className="impactMBoxRight">
              <h3>
                <RiLinksFill className="impactMIcons" /> % of Women Empoloyed
              </h3>
              <p>
                Over 70% of women who participated in Chal Naari's vocational
                training programs secured employment opportunities.
              </p>
            </div>
          </div>
          <div className="border-bottom"></div>
          <div className="impactMetricsBox">
            <div className="impactMBoxLeft">
              <p>30%</p>
              <p>Reduction</p>
            </div>
            <div className="impactMBoxRight">
              <h3>
                <RiLinksFill className="impactMIcons" /> Gender-based violence
                reduction
              </h3>
              <p>
                Since the launch of our advocacy campaign, there has been a 30%
                reduction in reported cases of gender-based violence in the
                communities we work with.
              </p>
            </div>
          </div>
          <div className="border-bottom"></div>
          <div className="impactMetricsBox">
            <div className="impactMBoxLeft">
              <p>10 Lakh</p>
              <p>Raised</p>
            </div>
            <div className="impactMBoxRight">
              <h3>
                <RiLinksFill className="impactMIcons" /> Amount of Fund Raised
              </h3>
              <p>
                Chal Naari has raised over $100,000 in funding to support our
                programs and services for women's empowerment.
              </p>
            </div>
          </div>
          <div className="border-bottom"></div>
          <div className="impactMetricsBox">
            <div className="impactMBoxLeft">
              <p>500</p>
              <p>Women</p>
            </div>
            <div className="impactMBoxRight">
              <h3>
                <RiLinksFill className="impactMIcons" /> Women Started Own
                Business
              </h3>
              <p>
                Over 500 women who participated in Chal Naari's entrepreneurship
                programs have started their own successful businesses.
              </p>
            </div>
          </div>
        </div>

        <div className="impactVisuals">
          <div className="iVHeader">
            <h2>Chal Naari Visuals</h2>
          </div>
          <div className="iVBox">
            <div className="iVBoxChild">
              <Image src={image1} alt="Impact 1" />
            </div>
            <div className="iVBoxChild">
              <Image src={image2} alt="Impact 2" />
            </div>
            <div className="iVBoxChild">
              <Image src={image3} alt="Impact 3" />
            </div>
            <div className="iVBoxChild">
              <Image src={image4} alt="Impact 4" />
            </div>
          </div>
          <div className="iVBox">
            <div className="iVBoxChild">
              <Image src={image5} alt="Impact 5" />
            </div>
            <div className="iVBoxChild">
              <Image src={image6} alt="Impact 6" />
            </div>
            <div className="iVBoxChild">
              <Image src={image7} alt="Impact 7" />
            </div>
            <div className="iVBoxChild">
              <Image src={image8} alt="Impact 8" />
            </div>
          </div>
          <div className="iVBox">
            <div className="iVBoxChild">
              <Image src={image9} alt="Impact 9" />
            </div>
            <div className="iVBoxChild">
              <Image src={image10} alt="Impact 10" />
            </div>
            <div className="iVBoxChild">
              <Image src={image11} alt="Impact 11" />
            </div>
            <div className="iVBoxChild">
              <Image src={image12} alt="Impact 12" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
