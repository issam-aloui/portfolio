import PropTypes from "prop-types";

export default function SkillCard({ icon, title, description, level = 0 }) {
  const getSkillStyle = (level) => {
    if (level >= 80)
      return {
        borderColor: "border-green-500/30",
        glowColor: "shadow-green-500/10",
        accentColor: "bg-green-500/20",
      };
    if (level >= 60)
      return {
        borderColor: "border-blue-500/30",
        glowColor: "shadow-blue-500/10",
        accentColor: "bg-blue-500/20",
      };
    if (level >= 40)
      return {
        borderColor: "border-yellow-500/30",
        glowColor: "shadow-yellow-500/10",
        accentColor: "bg-yellow-500/20",
      };
    return {
      borderColor: "border-red-500/30",
      glowColor: "shadow-red-500/10",
      accentColor: "bg-red-500/20",
    };
  };

  const skillStyle = getSkillStyle(level);

  return (
    <div
      className={`bg-greyThm/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 hover:bg-greyThm/30 transition-all duration-300 hover:scale-102 sm:hover:scale-105 hover:shadow-xl border border-greyThm/30 hover:${skillStyle.borderColor} hover:${skillStyle.glowColor} relative overflow-hidden`}>
      {/* Decorative corner accent */}
      <div
        className={`absolute top-0 right-0 w-12 h-12 ${skillStyle.accentColor} rounded-bl-2xl opacity-50`}></div>

      <div className="flex items-center gap-3 sm:gap-4 mb-3 relative z-10">
        <div className="text-cyanThm text-2xl sm:text-3xl flex-shrink-0">
          {icon}
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-whiteThm">
          {title}
        </h3>
      </div>

      <p className="text-whiteThm/70 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed relative z-10">
        {description}
      </p>

      {/* Decorative bottom element */}
      <div className="flex items-center justify-between">
        <div className="flex gap-1">
          <div className="w-1 h-1 bg-cyanThm/60 rounded-full animate-pulse"></div>
          <div className="w-1 h-1 bg-cyanThm/40 rounded-full animate-pulse delay-150"></div>
          <div className="w-1 h-1 bg-cyanThm/20 rounded-full animate-pulse delay-300"></div>
        </div>
        <div className="w-8 h-0.5 bg-gradient-to-r from-cyanThm/30 to-transparent rounded-full"></div>
      </div>
    </div>
  );
}

SkillCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  level: PropTypes.number,
};
