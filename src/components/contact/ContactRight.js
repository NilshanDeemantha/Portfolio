import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactRight = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Nilshan Deemantha</h3>
        <p className="text-lg font-normal text-gray-400">
          Full Stack Developer/ Software Engineer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          ipsam autem cumque, accusantium dicta odio.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+94 77 42 49 582</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText">ndeemantha1999@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a
              href="https://www.linkedin.com/in/nilshan-deemantha-2995a5269/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://github.com/NilshanDeemantha"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://web.facebook.com/profile.php?id=100010260977952"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://instagram.com/__nilshandeemantha____?utm_source=qr&igshid=MzNlNGNkZWQ4Mg=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactRight;
