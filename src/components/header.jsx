import PropTypes from "prop-types";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Anchor from "./anchor";

export default function Header({
  Texts = ["Logo", "Home", "About", "Contact"],
  navLinks = ["#home", "#about", "#contact"],
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="container flex justify-between items-center p-5 border-b border-cyanThm/10 backdrop-blur-xl bg-transparent sticky top-0 z-50">
      <div className="font-poppins font-bold text-2xl text-whiteThm tracking-wider">
        {Texts[0].replace("IssamAloui", "Issam Aloui")}
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex space-x-2">
          {Texts.slice(1).map((text, index) => (
            <li key={navLinks[index]}>
              <Anchor Text={text} link={navLinks[index]} />
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-whiteThm text-2xl p-2 hover:text-cyanThm transition-colors"
        onClick={toggleMenu}
        aria-label="Toggle menu">
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/20 backdrop-blur-xl border-b border-cyanThm/10 md:hidden">
          <nav className="container py-4">
            <ul className="flex flex-col space-y-2">
              {Texts.slice(1).map((text, index) => (
                <li key={navLinks[index]}>
                  <a
                    href={navLinks[index]}
                    onClick={handleLinkClick}
                    className="block px-4 py-3 text-whiteThm hover:text-cyanThm hover:bg-greyThm/20 rounded-lg transition-all duration-300 font-poppins">
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

Header.propTypes = {
  Texts: PropTypes.array.isRequired,
  navLinks: PropTypes.array,
};
