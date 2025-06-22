import PropTypes from "prop-types";

export default function Button({ Text, onClick, bgColor = 1, id }) {
  // Text shadow styles
  const primaryTextShadow = "[text-shadow:3px_3px_4px_rgba(0,0,0,0.7)]";
  const primaryHoverTextShadow =
    "hover:[text-shadow:4px_4px_4px_rgba(0,0,0,0.8)]";
  const primaryActiveTextShadow =
    "active:[text-shadow:2px_2px_2px_rgba(0,0,0,0.9)]";

  const secondaryTextShadow = "[text-shadow:2px_2px_3px_rgba(0,0,0,0.6)]";
  const secondaryHoverTextShadow =
    "hover:[text-shadow:3px_3px_4px_rgba(0,0,0,0.7)]";
  const secondaryActiveTextShadow =
    "active:[text-shadow:2px_2px_2px_rgba(0,0,0,0.8)]";

  // Box shadow styles
  const primaryBoxShadow = "shadow-[4px_4px_10px_rgba(0,0,0,0.3)]";
  const primaryHoverBoxShadow = "hover:shadow-[6px_6px_15px_rgba(0,0,0,0.4)]";
  const primaryActiveBoxShadow = "active:shadow-[2px_2px_5px_rgba(0,0,0,0.5)]";

  const secondaryBoxShadow = "shadow-[3px_3px_8px_rgba(0,0,0,0.25)]";
  const secondaryHoverBoxShadow =
    "hover:shadow-[5px_5px_12px_rgba(0,0,0,0.35)]";
  const secondaryActiveBoxShadow =
    "active:shadow-[2px_2px_4px_rgba(0,0,0,0.45)]";
  return (
    <button
      className={`text-whiteThm ${
        bgColor
          ? `bg-cyanThm hover:bg-cyanThm/90 
             ${primaryTextShadow} ${primaryHoverTextShadow} ${primaryActiveTextShadow}
             ${primaryBoxShadow} ${primaryHoverBoxShadow} ${primaryActiveBoxShadow}`
          : `bg-greyThm hover:bg-greyThm/90 
             ${secondaryTextShadow} ${secondaryHoverTextShadow} ${secondaryActiveTextShadow}
             ${secondaryBoxShadow} ${secondaryHoverBoxShadow} ${secondaryActiveBoxShadow}`
      } text-sm sm:text-base lg:text-lg rounded-2xl sm:rounded-3xl px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 font-poppins font-bold cursor-pointer
      relative overflow-hidden transition-all duration-300 
      hover:scale-102 sm:hover:scale-105
      before:absolute before:inset-0 before:bg-white/10 before:translate-x-[-100%] before:transition-transform before:duration-300
      hover:before:translate-x-0 before:rounded-2xl sm:before:rounded-3xl
      after:absolute after:inset-0 after:bg-black/20 after:opacity-0 after:transition-opacity after:duration-300
      active:scale-95 active:after:opacity-100
      disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none
      [&:not(:disabled)] text-nowrap`}
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
  id: PropTypes.string,
};
