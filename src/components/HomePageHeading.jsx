// src/components/HomePageHeading.jsx
import rightArrow from "../assets/RightArrow.png";

export default function HomePageHeading() {
  return (
    <div className="container flex justify-center lg:justify-start lg:items-start w-full px-4 lg:px-0">
      {/* Arrow - hidden on mobile, visible on desktop */}
      <img
        src={rightArrow}
        alt="Right Arrow"
        className="hidden lg:block w-20 xl:w-24 mb-2 sm:mb-4 flex-shrink-0"
      />
      <div className="flex flex-col items-center lg:items-start gap-4 sm:gap-6 md:gap-8 lg:ml-2 xl:ml-4">
        <div className="flex flex-col gap-1 sm:gap-2 text-center lg:text-left">
          <h1
            className="uppercase font-poppins font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-white leading-tight"
            id="Skip">
            Web dev &
          </h1>
          <h1 className="uppercase font-poppins font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-[#00ADB5] leading-tight">
            Cyber Security enthusiast
          </h1>
        </div>
        {/* Enhanced mobile-first button layout */}
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 md:gap-6 w-full max-w-md lg:max-w-none">
          <a
            href="#Contact"
            className="bg-cyanThm hover:bg-cyanThm/90 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg text-center text-sm sm:text-base">
            Hire Me
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-cyanThm text-cyanThm hover:bg-cyanThm hover:text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-all duration-300 hover:scale-105 text-center text-sm sm:text-base">
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}
