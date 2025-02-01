import PropTypes from "prop-types";
export default function Anchor({ Text = "Default Text", link = "#" }) {
  return (
    <a href={link} className="text-white px-4">
      {Text}
    </a>
  );
}
Anchor.propTypes = {
    Text: PropTypes.string,
    link: PropTypes.string,
    };