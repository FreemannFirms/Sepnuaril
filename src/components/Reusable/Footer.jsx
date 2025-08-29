import React from "react";
import { NavLink } from "react-router-dom";

//IMAGE//
import img from "../../assets/Images/logo.png";

//ICONS//
import { FiInstagram } from "react-icons/fi";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-[var(--primary-color)] text-neutral-content p-10 shadow-lg dark:bg-black">
      <nav>
        <NavLink to="/" className="">
          <img className="w-auto h-10 md:h-22 rounded-md" src={img} alt="" />
        </NavLink>
      </nav>
      <nav>
        <h6 className="footer-title">LINKS</h6>
        <NavLink to="/" className="link link-hover">
          Home
        </NavLink>
        <NavLink to="about" className="link link-hover">
          About Us
        </NavLink>
        <NavLink to="services" className="link link-hover">
          Our Services
        </NavLink>
        <NavLink to="contact" className="link link-hover">
          Contact Us
        </NavLink>
      </nav>

      <div className="flex flex-col">
        <h6 className="footer-title">SOCIALS</h6>

        <div className="flex justify-center lg:flex lg:mt-0 lg:mx-0 items-center">
          <div className="flex items-center lg:mt-0">
            <a
              href="https://facebook.com/sepnuarilservices"
              target="_blank"
              className="mr-2   text-hover text-gray-300 transition-colors duration-300 transform dark:text-gray-100 hover:text-secondary dark:hover:text-hover"
              aria-label="Reddit"
            >
              <BsFacebook style={{ fontSize: "24px" }} />
            </a>
            <a
              href="https://www.instagram.com/sepnuarilservices"
              target="_blank"
              className="mx-2 text-hover text-gray-300 transition-colors duration-300 transform dark:text-gray-100 hover:text-secondary dark:hover:text-hover"
              aria-label="Reddit"
            >
              <FiInstagram style={{ fontSize: "24px" }} />
            </a>
            <a
              href="https://linkedin.com/company/sepnuarilservices"
              target="_blank"
              className="mx-2 text-hover text-gray-300 transition-colors duration-300 transform dark:text-gray-100 dark:hover:text-hover"
              aria-label="Reddit"
            >
              <FaLinkedin style={{ fontSize: "24px" }} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
