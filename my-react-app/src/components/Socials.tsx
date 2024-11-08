import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaGithub, FaRegFile, FaLinkedin } from "react-icons/fa";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

const Socials = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="flex flex-col space-y-2 h-full items-center justify-center col-start-2 col-span-1 row-start-2 row-span-1">
      <h1 className="text-3xl font-extrabold text-white">
        Hi! I&apos;m Robert Garabetian
      </h1>{" "}
      <div className="flex flex-row space-x-3 text-2xl">
        <a
          target="_blank"
          href="https://www.instagram.com/rrobert_garabetiann/"
        >
          <FaInstagram />
        </a>
        <a target="_blank" href="https://github.com/RobertGarabetian">
          <FaGithub />
        </a>
        <a
          target="_blank"
          href="https://utfs.io/f/TyvOmWdABc6GUyg2iDZozSW4lAPm7JZYj6xFeCVvyr5dGb0p"
        >
          <FaRegFile />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/robert-garabetian-968396294/"
        >
          <FaLinkedin />
        </a>
      </div>
      <div className="text-primary">
        {" "}
        <b>robertgarabetian90@gmail.com</b>
      </div>
      <motion.div
        className={`flex absolute bottom-0 justify-center pb-12 w-1/3 duration-1000 transition-all ease-in-out  ${
          isScrolled ? "hidden" : ""
        }`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <HiOutlineChevronDoubleDown
          size={32}
          className="animate-bounce text-white"
        />
      </motion.div>
    </div>
  );
};

export default Socials;
