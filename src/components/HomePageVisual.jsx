import doodles from "../assets/doodles mixed round.svg";
import homeImage from "../assets/self_pic.jpg";

export default function HomePageVisual() {
  return (
    <div className="relative w-full h-auto max-w-[500px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] mx-auto px-4 sm:px-0">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 opacity-30 sm:opacity-40">
        <img
          src={doodles}
          alt=""
          className="w-full h-full object-contain animate-pulse"
        />
      </div>
      {/* Additional decorative rings - responsive sizing */}
      <div className="absolute inset-2 sm:inset-4 border border-cyanThm/15 sm:border-2 sm:border-cyanThm/20 rounded-full animate-spin-slow"></div>
      <div className="absolute inset-4 sm:inset-8 border border-whiteThm/15 sm:border-whiteThm/20 rounded-full animate-reverse-spin"></div>{" "}
      {/* Main illustration */}
      <div className="relative z-10 p-4 sm:p-6 md:p-8">
        <div className="bg-gradient-to-br from-cyanThm/20 via-cyanThm/10 to-greyThm/20 rounded-full p-2 sm:p-3 md:p-4 backdrop-blur-sm border border-cyanThm/30 sm:border-2 sm:border-cyanThm/40 shadow-xl sm:shadow-2xl hover:shadow-cyanThm/20 transition-all duration-500">
          {/* Circular image container with enhanced styling */}
          <div className="relative rounded-full overflow-hidden border-2 sm:border-3 md:border-4 border-cyanThm/50 sm:border-cyanThm/60 shadow-inner group">
            {" "}
            <img
              src={homeImage}
              alt="Developer workspace illustration"
              className="w-full h-full object-cover object-[center_25%] aspect-square hover:scale-105 sm:hover:scale-110 transition-transform duration-500 ease-in-out filter hover:brightness-110"
            />
            {/* Overlay gradient for better visual appeal */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyanThm/10 to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-300"></div>
            {/* Subtle inner glow effect */}
            <div className="absolute inset-0 rounded-full shadow-inner shadow-cyanThm/20"></div>
          </div>
        </div>
      </div>{" "}
      {/* Enhanced floating elements - responsive sizing and positioning */}
      <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 bg-gradient-to-br from-cyanThm/60 to-cyanThm/40 rounded-full animate-bounce delay-100 shadow-md sm:shadow-lg border border-cyanThm/80"></div>
      <div className="absolute bottom-4 sm:bottom-8 left-2 sm:left-4 w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 bg-gradient-to-br from-whiteThm/60 to-whiteThm/40 rounded-full animate-bounce delay-300 shadow-md sm:shadow-lg"></div>
      <div className="absolute top-1/2 right-4 sm:right-6 md:right-8 w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 bg-gradient-to-br from-cyanThm/80 to-cyanThm/60 rounded-full animate-pulse shadow-sm sm:shadow-md"></div>
      <div className="absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8 w-3 sm:w-3.5 md:w-4 h-3 sm:h-3.5 md:h-4 bg-gradient-to-br from-whiteThm/50 to-whiteThm/30 rounded-full animate-ping"></div>
      <div className="absolute bottom-2 sm:bottom-4 right-8 sm:right-10 md:right-12 w-3.5 sm:w-4 md:w-5 h-3.5 sm:h-4 md:h-5 bg-gradient-to-br from-cyanThm/70 to-cyanThm/50 rounded-full animate-bounce delay-500 shadow-sm sm:shadow-md"></div>
    </div>
  );
}
