import { useState, useEffect } from "react";
import AboutMe from "./AboutMe";
import Technologies from "./Technologies";
import Socials from "./Socials";
import Projects from "./Projects";
import Experience from "./Experiance";

function TopComponent() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [secondScrolled, setSecondScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      setSecondScrolled(scrollPosition > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`bg-gradient-to-br from-blue-500 to-purple-600 p-1 w-screen h-screen fixed z-10 transition-all ease-in-out duration-1000
        ${isScrolled ? "p-1" : "p-20"}`}
    >
      <div className="bg-black w-full h-full rounded-lg flex flex-col justify-content items-center">
        <div className="grid grid-cols-3 grid-rows-3 gap-2 h-full p-3 w-full">
          <div
            className={`col-start-1 col-span-1 row-start-1 row-span-2 p-2 transition-all ease-in-out duration-1000 ${
              secondScrolled ? "opacity-100" : "opacity-0"
            }`}
          >
            <AboutMe />
          </div>
          <div
            className={`col-start-2 col-span-1 row-start-2 row-span-1 p-2 transition-all ease-in-out duration-1000 
            `}
          >
            <Socials />
          </div>

          <div
            className={`col-start-1 col-span-2 row-start-3 row-span-1 p-2 transition-all ease-in-out duration-1000 ${
              secondScrolled ? "opacity-100" : "opacity-0"
            }`}
          >
            <Technologies />
          </div>
          <div
            className={`col-start-2 col-span-2 row-start-1 row-span-1 p-2 transition-all ease-in-out duration-1000 ${
              secondScrolled ? "opacity-100" : "opacity-0"
            }`}
          >
            <Projects />
          </div>
          <div
            className={`col-start-3 col-span-1 row-start-2 row-span-2 p-2 transition-all ease-in-out duration-1000 ${
              secondScrolled ? "opacity-100" : "opacity-0"
            }`}
          >
            <Experience />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopComponent;
