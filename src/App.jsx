import React, { useEffect } from "react";
import Button from "./components/button";
import HomePage from "./pages/HomePage";
import colorLastWord from "./hooks/colorLastWord";
import Footer from "./pages/Footer";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import "./global.css";
export default function App() {
  useEffect(() => {
    colorLastWord();
  }, []);

  return (
    <div>
      <HomePage />
      <main>
        <AboutMe />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
