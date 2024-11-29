import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <footer className="bg-black text-white md:py-4 md:px-12 lg:px-12 lg:py-4 py-4 flex justify-between items-center">
      <div className="ml-4">
        <p className="md:text-xs footer-text">
          &copy; 2024 My Thrift. All rights reserved.
        </p>
        <div className="flex md:text-xs  footer-text space-x-4 mt-1">
          <button
            onClick={() => handleNavigation("/privacy-policy")}
            className="underline text-white"
          >
            Privacy Policy
          </button>
          <button
            onClick={() => handleNavigation("/terms-of-use")}
            className="underline text-white"
          >
            Terms of Use
          </button>
        </div>
      </div>
      <div className="mr-6 flex space-x-6">
        <a
          href="https://www.instagram.com/mythriftng?igsh=MTFzM2tkMXp2Z2RpYg=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
        <a
          href="https://x.com/mythriftng"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
