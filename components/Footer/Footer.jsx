import React from "react";
import "./style.scss";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiMailFill,
  RiTwitterFill,
} from "react-icons/ri";
import Image from "next/image";
import chalnaariLogoWhite from "../../public/chalnaariLogoWhite.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="fCTab1">
          <h4>Main Pages</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/impact">Impact</a>
            </li>

            <li>
              <a href="/blogs">Blogs</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="fCTab2">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/donate">Donate</a>
            </li>
            <li>
              <a href="/news-and-updates">News & Updates</a>
            </li>
            <li>
              <a href="/partnerships">Partnerships</a>
            </li>
            <li>
              <a href="/events-and-opportunities">Events</a>
            </li>
            <li>
              <a href="/volunteer">Volunteer</a>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
          </ul>
        </div>

        <div className="fCTab5">
          <h4>Pages</h4>
          <ul>
            <li>
              <a href="/donation-policy">Donation Policy</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy & Policy</a>
            </li>
            <li>
              <a href="/terms-conditions">Terms & Conditions</a>
            </li>
            <li>
              <a href="/disclaimer">Disclaimer</a>
            </li>
            <li>
              <a href="/testimonials">Testimonials</a>
            </li>
            <li>
              <a href="/faq">FAQs</a>
            </li>
          </ul>
        </div>

        <div className="fCTab3">
          <h4>Contact</h4>
          <ul>
            <li>
              <RiMailFill className="fCTab3Icons" />
              &nbsp;&nbsp;
              <a href="mailto: info@chalnaari.com">info@chalnaari.com</a>
            </li>
          </ul>
        </div>
        <div className="fCTab4">
          <div className="footerLogo">
            <Image src={chalnaariLogoWhite} />
          </div>
        </div>
      </div>

      <div className="footerSocial">
        <div className="fsChild">
          <Link href="/">
            <RiFacebookFill className="fSocialIcons" />
          </Link>
        </div>
        <div className="fsChild">
          <Link href="/">
            <RiLinkedinFill className="fSocialIcons" />
          </Link>
        </div>
        <div className="fsChild">
          <Link href="/">
            <RiTwitterFill className="fSocialIcons" />
          </Link>
        </div>
        <div className="fsChild">
          <Link href="/">
            <RiInstagramFill className="fSocialIcons" />
          </Link>
        </div>
      </div>
      <div className="copyright">
        <h4>Copyright &#169; 2023 Chal Naari. All Right Reserved.</h4>
      </div>
    </footer>
  );
};

export default Footer;
