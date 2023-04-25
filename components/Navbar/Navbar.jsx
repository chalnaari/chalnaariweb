"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import chalnaari from "../../public/chalnaari.png";
import {
  AiOutlineGlobal,
  AiOutlineInfoCircle,
  AiOutlineUsergroupDelete,
} from "react-icons/ai";
import { TbHeartHandshake } from "react-icons/tb";
import { HiChevronDown, HiMenu } from "react-icons/hi";
import "./style.scss";
import {
  RiArticleLine,
  RiBuilding2Line,
  RiCalendarEventLine,
  RiContactsBookLine,
  RiFileHistoryLine,
  RiGlobalLine,
  RiGroupLine,
  RiHandHeartLine,
  RiHome2Line,
  RiLineChartLine,
  RiLinksLine,
  RiNewspaperLine,
  RiQuestionAnswerLine,
  RiQuestionMark,
  RiQuestionnaireLine,
  RiTeamLine,
} from "react-icons/ri";
import Link from "next/link";

const Navbar = () => {
  const [color, setColor] = useState(false);

  const [showMenu, setShowMenu] = useState(false);
  // const [showDropDown, setShowDropDown] = useState(false);
  // const [showDropDown2, setShowDropDown2] = useState(false);

  // const toggleDropDown = () => {
  //   if (showDropDown === false) {
  //     setShowDropDown(true);
  //   } else {
  //     setShowDropDown(false);
  //   }
  // };

  // const toggleDropDown2 = () => {
  //   if (showDropDown2 === false) {
  //     setShowDropDown2(true);
  //   } else {
  //     setShowDropDown2(false);
  //   }
  // };

  const toggleMenu = () => {
    if (showMenu === false) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  };

  const changeColor = () => {
    if (window.scrollY >= 20) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  // window.addEventListener("scroll", changeColor);
  useEffect(() => {
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <header>
      <nav className={color ? "navbar navbar-bg" : "navbar"}>
        <div className="logo">
          <Link href="/">
            <Image src={chalnaari} alt="Chal Naari Logo" />
          </Link>
        </div>
        <div className="mainMenu">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              Who We Are
              <HiChevronDown className="mainMenuIcon" />
              <ul className={`dropdown`}>
                <li>
                  <AiOutlineInfoCircle className="dropdownIcon" />
                  <br />
                  <a href="/about">About Us</a>
                  <p>
                    Chal Naari empowers women with education, health, and
                    economic opportunities for a better future.
                  </p>
                </li>
                <li>
                  <AiOutlineUsergroupDelete className="dropdownIcon" />
                  <br />
                  <a href="/our-team">Our Team</a>
                  <p>
                    Meet our passionate team dedicated to empowering women and
                    driving social change in our community.
                  </p>
                </li>
                <li>
                  <TbHeartHandshake className="dropdownIcon" />
                  <br />
                  <a href="/impact">Impact</a>
                  <p>
                    Explore the meaningful impact of Chal Naari's work in
                    promoting gender equality and women's empowerment.
                  </p>
                </li>
                <li>
                  <AiOutlineGlobal className="dropdownIcon" />
                  <br />
                  <a href="/initiatives">Initiatives</a>
                  <p>
                    See how Chal Naari's initiatives are making a tangible
                    difference in the lives of women and their families.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              Community
              <HiChevronDown className="mainMenuIcon" />
              <ul className={`dropdown`}>
                <li>
                  <AiOutlineInfoCircle className="dropdownIcon" />
                  <br />
                  <a href="/stories">Stories</a>
                  <p>
                    Explore the powerful stories of resilience and
                    transformation from the women Chal Naari serves.
                  </p>
                </li>
                <li>
                  <AiOutlineUsergroupDelete className="dropdownIcon" />
                  <br />
                  <a href="/social">Social</a>
                  <p>
                    Engage with Chal Naari's vibrant community on social media
                    and share your thoughts and ideas.
                  </p>
                </li>
                <li>
                  <TbHeartHandshake className="dropdownIcon" />
                  <br />
                  <a href="/organizations">Organizations</a>
                  <p>
                    See how Chal Naari's network of partners and supporters are
                    driving positive change in our community.
                  </p>
                </li>
                <li>
                  <AiOutlineGlobal className="dropdownIcon" />
                  <br />
                  <a href="/events-and-opportunities">Events & Opportunities</a>
                  <p>
                    Explore the various ways you can support Chal Naari's work
                    and make a difference in women's lives.
                  </p>
                </li>
              </ul>
            </li>

            <li>
              <a href="/blogs">Blogs</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/donate">Donate</a>
            </li>
          </ul>
        </div>
        <div className="mobileMenu">
          <button className="mButton" onClick={toggleMenu}>
            <HiMenu />
          </button>
          <ul className={`mMenu ${showMenu ? "showMenu" : ""}`}>
            <li>
              <RiHome2Line className="mMenuIcons" /> <a href="/">Home</a>
            </li>
            <div className="border-bottom"></div>
            <li>
              <RiQuestionnaireLine className="mMenuIcons" /> Who We Are{" "}
              <HiChevronDown className="mDropDownIcon" />
              <ul className={`mDropDown`}>
                <li>
                  <RiQuestionAnswerLine className="mDropMenuIcons" />{" "}
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <RiTeamLine className="mDropMenuIcons" />{" "}
                  <a href="/our-team">Our Team</a>
                </li>
                <li>
                  <RiGlobalLine className="mDropMenuIcons" />{" "}
                  <a href="/impact">Impact</a>
                </li>
                <li>
                  <RiLineChartLine className="mDropMenuIcons" />{" "}
                  <a href="/initiatives">Initiatives</a>
                </li>
              </ul>
            </li>
            <div className="border-bottom"></div>
            <li>
              <RiGroupLine className="mMenuIcons" /> Community{" "}
              <HiChevronDown className="mDropDownIcon" />
              <ul className={`mDropDown`}>
                <li>
                  <RiFileHistoryLine className="mDropMenuIcons" />{" "}
                  <a href="/stories">Stories</a>
                </li>
                <li>
                  <RiLinksLine className="mDropMenuIcons" />{" "}
                  <a href="/social">Social</a>
                </li>
                <li>
                  <RiBuilding2Line className="mDropMenuIcons" />{" "}
                  <a href="/organizations">Organizations</a>
                </li>
                <li>
                  <RiCalendarEventLine className="mDropMenuIcons" />{" "}
                  <a href="/">Events</a>
                </li>
              </ul>
            </li>
            <div className="border-bottom"></div>
            <li>
              <RiArticleLine className="mMenuIcons" />{" "}
              <a href="/blogs">Blogs</a>
            </li>
            <div className="border-bottom"></div>
            <li>
              <RiContactsBookLine className="mMenuIcons" />{" "}
              <a href="/contact">Contact</a>
            </li>
            <div className="border-bottom"></div>
            <li>
              <RiHandHeartLine className="mMenuIcons" />{" "}
              <a href="/donate">Donate</a>
            </li>
            <div className="border-bottom"></div>
            <li>
              <RiNewspaperLine className="mMenuIcons" />{" "}
              <a href="/donate">News & Updates</a>
            </li>
            <div className="border-bottom"></div>
            <li>
              <RiQuestionMark className="mMenuIcons" /> <a href="/faq">FAQs</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
