import PropTypes from "prop-types";
export default function Anchor({ Text = "Default Text", link = "#" }) {
  return (
    <a
      href={link}
      className="font-poppins text-whiteThm text-lg px-4 relative inline-block
        before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 
        before:w-0 before:h-0.5 before:bg-cyanThm before:transition-all before:duration-300
        after:absolute after:w-full after:h-full after:bg-cyanThm/10
        after:top-0 after:left-0 after:rounded-lg after:scale-90 after:opacity-0
        after:transition-all after:duration-300
        hover:before:w-4/5 hover:text-cyanThm hover:scale-105
        active:scale-95 active:after:scale-100 active:after:opacity-100
        transition-all duration-300">
      {Text}
    </a>
  );
}
Anchor.propTypes = {
  Text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  link: PropTypes.string,
};
