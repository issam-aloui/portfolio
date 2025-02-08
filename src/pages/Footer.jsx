import React from "react";
import Anchor from "../components/anchor";
import { FaHome, FaUser, FaEnvelope } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaGithub, FaDiscord } from "react-icons/fa";

function Footer() {
  const mainLinks = ["Home", "About", "Contact"];
  const mainUrls = ["/", "/about", "/contact"];
  const mainIcons = [<FaHome />, <FaUser />, <FaEnvelope />];

  const socialUrls = [
    "https://facebook.com",
    "https://instagram.com",
    "https://github.com",
    "https://discord.com",
  ];
  const socialIcons = [
    <FaFacebook />,
    <FaInstagram />,
    <FaGithub />,
    <FaDiscord />,
  ];

  return (
    <footer className="bg-darkThm py-8 px-4 md:px-6 border-t-2 border-greyThm">
      <div className="max-w-md mx-auto flex flex-col items-center">
        {/* Primary Navigation */}
        <nav className="mb-8">
          <ul className="flex flex-wrap justify-center gap-6">
            {mainLinks.map((text, index) => (
              <li key={mainUrls[index]}>
                <Anchor
                  Text={
                    <span className="flex items-center gap-2">
                      {mainIcons[index]}
                      {text}
                    </span>
                  }
                  link={mainUrls[index]}
                />
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Media Navigation */}
        <nav className="mb-8">
          <ul className="flex justify-center gap-6 text-whiteThm">
            {socialIcons.map((icon, index) => (
              <li
                key={socialUrls[index]}
                className="bg-greyThm p-3 rounded-full hover:bg-opacity-80 transition-all">
                <a
                  href={socialUrls[index]}
                  target="_blank"
                  rel="noopener noreferrer">
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Legal Links */}
        <div className="text-right w-[90vw]">
          <p className="text-whiteThm opacity-75 text-sm text-right">
            © {new Date().getFullYear()} | <a href="/terms">Terms of Service</a>{" "}
            - <a href="/privacy">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
