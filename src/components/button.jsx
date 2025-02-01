import PropTypes from "prop-types";

export default function Button({ Text, onClick }) {
  return (
    <button className="text-whiteThm bg-[var(--color-cyanThm)] text-lg rounded-3xl px-8 py-2 font-poppins font-bold cursor-pointer   [text-shadow:_0_2px_4px_var(--color-darkBlueThm)]">
      {Text}
    </button>
  );
}
Button.propTypes = {
  Text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
