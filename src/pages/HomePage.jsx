// src/pages/HomePage.jsx
import Header from "../components/header";
import HomePageHeading from "../components/HomePageHeading";
import HomePagePng from "../components/HomePagePng";
import { FaArrowDown } from "react-icons/fa";
import lightbulb from "../assets/lightbulb.svg";
import vector141 from "../assets/Vector141.svg";


export default function HomePage() {
  return (
    <div className="flex flex-col relative overflow-hidden" id="Home">
      {/* Decorative SVGs */}
      <img
        src={lightbulb}
        alt=""
        className="absolute top-20 right-[5%] w-16 md:w-20 opacity-50 animate-pulse"
      />
      <img
        src={vector141}
        alt=""
        className="absolute bottom-20 left-[5%] w-12 md:w-16 opacity-50"
      />

      <Header
        Texts={["IssamAloui", "Home", "About Me", "Contact"]}
        navLinks={["#Home", "#About", "#Contact"]}
      />
      {/* Update the container to be more responsive */}
      <div className="container relative flex flex-col md:flex-row justify-between items-center min-h-[70vh] w-full gap-8 py-8">
        <HomePageHeading />
        {/* Add responsive classes to control SVG size */}
        <div className="w-full h-auto max-w-[500px]">
          <HomePagePng />
        </div>
      </div>

      <div className="flex w-full justify-center items-center h-[10vh]">
        <a
          href="#About"
          className="flex flex-col items-center text-white hover:opacity-80 transition-opacity">
          <FaArrowDown className="text-6xl animate-bounce bg-[#393E46] opacity-75 p-2 rounded-lg" />
        </a>
      </div>
    </div>
  );
}
