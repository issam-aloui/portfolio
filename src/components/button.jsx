import PropTypes from "prop-types";

export default function Button({ Text, onClick, bgColor = 1, id }) {
  return (
    <button
      className={`text-whiteThm ${
        bgColor
          ? "bg-[var(--color-cyanThm)] hover:bg-[var(--color-cyanThm)]/90"
          : "bg-[#393E46] hover:bg-[#393E46]/90"
      } text-lg rounded-3xl px-8 py-2 font-poppins font-bold cursor-pointer [text-shadow:_0_2px_4px_var(--color-darkBlueThm)] 
      relative overflow-hidden transition-all duration-300 
      hover:scale-105
      before:absolute before:inset-0 before:bg-white/10 before:translate-x-[-100%] before:transition-transform before:duration-300
      hover:before:translate-x-0 before:rounded-3xl
      after:absolute after:inset-0 after:bg-black/20 after:opacity-0 after:transition-opacity after:duration-300
      active:scale-90 active:after:opacity-100 active:shadow-inner
      disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none
      [&:not(:disabled)]`}
      onClick={onClick}
      id={id}>
      {Text}
    </button>
  );
}

Button.propTypes = {
  Text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  bgColor: PropTypes.number,
};
