import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import { useEffect, useState } from "react";
import About from "./About";
import { Resume } from "./Resume";
import { motion, AnimatePresence, type Transition } from "motion/react";

export default function Home() {
  const [currentMenu, setCurrentMenu] = useState("home");
  useEffect(() => {
    (() => {
      const path = window.location.pathname.replace("/", "") || "#/home";
      setCurrentMenu(path.replace("#", "").replace("/", ""));
    })();
  }, [setCurrentMenu]);

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -20,
    },
  };

  const pageTransition: Transition = {
    duration: 0.4,
    ease: "easeInOut",
  };

  return (
    <div>
      <Navbar
        onChangeMenu={(m) => {
          setCurrentMenu(m);
          window.history.pushState({}, "", `#/${m}`);
        }}
      />
      <div className="h-16"></div>

      <div className="relative">
        <AnimatePresence mode="wait">
          {currentMenu === "home" && (
            <motion.div
              key="home"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <Hero />
              <Projects />
              <Footer />
            </motion.div>
          )}

          {currentMenu === "about" && (
            <motion.div
              key="about"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <About />
              <Footer />
            </motion.div>
          )}

          {currentMenu === "resume" && (
            <motion.div
              key="resume"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <Resume />
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
