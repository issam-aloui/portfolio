// src/pages/HomePage.jsx
import Header from "../components/header";
import HomePageHeading from "../components/HomePageHeading";
import HomePageVisual from "../components/HomePageVisual";
import { FaArrowDown } from "react-icons/fa";
import lightbulb from "../assets/lightbulb.svg";
import vector141 from "../assets/Vector141.svg";

export default function HomePage() {
  return (
    <div
      className="flex flex-col relative overflow-hidden min-h-screen"
      id="Home">
      {" "}
      {/* Decorative SVGs - responsive sizing */}
      <img
        src={lightbulb}
        alt=""
        className="absolute top-16 sm:top-20 right-[2%] sm:right-[5%] w-10 sm:w-12 md:w-16 lg:w-20 opacity-40 sm:opacity-50 animate-pulse"
      />
      <img
        src={vector141}
        alt=""
        className="absolute bottom-16 sm:bottom-20 left-[2%] sm:left-[5%] w-8 sm:w-10 md:w-12 lg:w-16 opacity-40 sm:opacity-50"
      />{" "}
      <Header
        Texts={[
          "Issam Aloui",
          "Home",
          "About",
          "Skills",
          "Projects",
          "Contact",
        ]}
        navLinks={["#Home", "#About", "#Skills", "#Projects", "#Contact"]}
      />{" "}
      {/* Main content container with full height - enhanced mobile layout */}
      <div className="container flex-1 flex flex-col lg:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 py-4 sm:py-6 md:py-8 px-4 sm:px-6">
        <div className="order-2 lg:order-1 w-full lg:w-1/2">
          <HomePageHeading />
        </div>
        <div className="order-1 lg:order-2 w-full sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px] lg:w-1/2">
          <HomePageVisual />
        </div>
      </div>{" "}
      {/* Arrow section at bottom - responsive spacing */}
      <div className="flex justify-center items-center py-4 sm:py-6 md:py-8">
        <a
          href="#About"
          className="flex flex-col items-center text-whiteThm hover:opacity-80 transition-opacity">
          <FaArrowDown className="text-4xl sm:text-5xl md:text-6xl animate-bounce bg-greyThm opacity-75 p-1.5 sm:p-2 rounded-lg" />
        </a>
      </div>
    </div>
  );
}
