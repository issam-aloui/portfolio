import PropTypes from "prop-types";
import Anchor from "./anchor";

export default function Header({
  Texts = ["Logo", "Home", "About", "Contact"],
  navLinks = ["#home", "#about", "#contact"],
}) {
  return (
    <header className="container flex justify-between p-5 border-b-2 border-greyThm  z-10">
      <p className="font-oswald font-bold text-2xl text-whiteThm">{Texts[0]}</p>
      <nav className="hidden md:block">
        <ul className="flex">
          {Texts.slice(1).map((text, index) => (
            <li key={navLinks[index]}>
              <Anchor Text={text} link={navLinks[index]} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {
  Texts: PropTypes.array.isRequired,
  navLinks: PropTypes.array,
};
