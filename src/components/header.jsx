import PropTypes from "prop-types";
import Anchor from "./anchor";

export default function Header({
  Texts = ["Logo", "Home", "About", "Services", "Contact"],
  navLinks = ["#home", "#about", "#services", "#contact"],
}) {
  return (
    <header className="container flex justify-between">
      <p className="font-oswald font-bold text-2xl text-whiteThm">{Texts[0]}</p>
      <nav>
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
