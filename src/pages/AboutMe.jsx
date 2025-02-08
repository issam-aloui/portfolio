import React from "react";
import Anchor from "../components/anchor";
export default function AboutMe() {
  return (
    <main className="min-h-screen bg-darkBlueThm " id="About">
      <div className="container flex flex-col md:flex-row items-center py-20">
        {/* Left Section */}
        <div className="flex-1 p-8 flex flex-col justify-center relative">
          {/* Decorative SVGs */}
          <img
            src="/src/assets/lightbulb.svg"
            alt=""
            className="absolute top-0 right-0 w-20 opacity-50"
          />
          <img
            src="/src/assets/Vector141.svg"
            alt=""
            className="absolute bottom-0 left-0 w-16 opacity-50"
          />
          <img
            src="/src/assets/Vector186 (1).svg"
            alt=""
            className="absolute -top-10 -left-10 w-36 opacity-20"
          />

          <h1 className="text-6xl mb-6">
            About <span className="text-cyanThm">me</span>
          </h1>
          <p className="text-whiteThm/70 leading-relaxed mb-6 max-w-xl font-poppins">
            As a passionate Computer Science student, I'm deeply immersed in the
            world of front-end development while exploring various other tech
            domains. My journey involves crafting engaging user interfaces and
            turning creative designs into seamless web experiences. Beyond
            front-end, I'm fascinated by the broader spectrum of software
            development, from backend architecture to emerging technologies like
            AI and cloud computing.
          </p>
          <a
            className="text-cyanThm text-left hover:text-cyanThm/80 transition-colors font-poppins cursor-pointer"
            href="https://www.linkedin.com/in/aloui-issam-eddine/"
            target="_blank">
            Read more
          </a>
        </div>

        {/* Right Section */}
        <div className="flex-1 relative flex items-center justify-center p-8">
          <img
            src="/src/assets/doodleitems.svg"
            alt="Doodle elements"
            className="absolute -top-right-12 w-[120%] h-[120%] opacity-30 z-0"
          />
          {/* Main image container - increased size */}
          <div className="relative w-4/5">
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-10 bg-black/40 blur-xl rounded-[50%]"></div>
            <img
              src="/src/assets/Group62.png"
              alt="Person at desk"
              className="relative z-10 w-full"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
