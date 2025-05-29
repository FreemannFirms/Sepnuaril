import React from "react";
import { NavLink } from "react-router-dom";

//IMAGE//
import img from "../../assets/Images/logo.png";

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
        <NavLink to="/" className="link link-hover">Home</NavLink>
        <NavLink to="about" className="link link-hover">About us</NavLink>
        <NavLink to="services" className="link link-hover">Our services</NavLink>
        <NavLink to="contact" className="link link-hover">Contact</NavLink>
      </nav>
      <nav>
        <h6 className="footer-title">CONTACT</h6>
        <a className="link link-hover">Sepnuaril@gmail.com</a>
      </nav>
    </footer>
  );
};

export default Footer;
