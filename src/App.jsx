import React, { useEffect, useState } from "react";
import Button from "./components/button";
import HomePage from "./pages/HomePage";
import colorLastWord from "./hooks/colorLastWord";
import Footer from "./pages/Footer";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import LoadingScreen from "./components/LoadingScreen";
import "./global.css";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    colorLastWord();

    // Add smooth scrolling to all anchor links
    document.documentElement.style.scrollBehavior = "smooth";

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
      
      // Trigger animations shortly after loading completes
      setTimeout(() => {
        // Intersection Observer for scroll animations
        const observerOptions = {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px",
        };

        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-visible");
            }
          });
        }, observerOptions);

        // Observe all elements with animate-on-scroll class
        const animatedElements = document.querySelectorAll(".animate-on-scroll");
        animatedElements.forEach((el) => observer.observe(el));
        
        return () => observer.disconnect();
      }, 100);
    }, 2500);

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div>
      <HomePage />
      <main>
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
