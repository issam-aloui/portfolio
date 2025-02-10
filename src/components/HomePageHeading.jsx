// src/components/HomePageHeading.jsx
import Button from "../components/button";

export default function HomePageHeading() {
  return (
    <div className="container flex items-center lg:items-start w-full lg:w-1/2 px-4 lg:px-0">
      <img
        src="src/assets/RightArrow.png"
        alt="RightArrow"
        className="w-16 lg:w-30 mb-4"
      />
      <div className="flex flex-col items-center lg:items-start gap-8">
        <div className="flex flex-col gap-2 text-center lg:text-left">
          <h1
            className="uppercase font-poppins font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white"
            id="Skip">
            Front-end
          </h1>
          <h1 className="uppercase font-poppins font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#00ADB5]">
            enthusiast
          </h1>
        </div>
        {/* Make buttons stack on mobile */}
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-9 w-full">
          <Button Text="Hire me" />
          <Button Text="Download cv" bgColor={0} />
        </div>
      </div>
    </div>
  );
}
