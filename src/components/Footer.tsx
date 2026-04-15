import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="px-4 lg:px-12 flex w-full items-center justify-between py-4 mt-12 text-sm">
      <ul className="flex gap-3">
        <motion.li
          initial={{ translateY: 10, opacity: 0 }}
          animate={{
            translateY: 0,
            opacity: 100,
            transition: {
              delay: 0,
              duration: 0.5,
            },
          }}
        >
          <a
            href="https://www.linkedin.com/in/m-mahairul-makrus-ali-77805b1ba/"
            target="_blank"
          >
            LINKEDIN
          </a>
        </motion.li>
        <motion.li
          initial={{ translateY: 10, opacity: 0 }}
          animate={{
            translateY: 0,
            opacity: 100,
            transition: {
              delay: 0.3,
              duration: 0.5,
            },
          }}
        >
          <a href="https://www.instagram.com/makrus.ali_/">INSTAGRAM</a>
        </motion.li>
        <motion.li
          initial={{ translateY: 10, opacity: 0 }}
          animate={{
            translateY: 0,
            opacity: 100,
            transition: {
              delay: 0.3 * 2,
              duration: 0.5,
            },
          }}
        >
          <a href="https://www.youtube.com/@makrusali-w8w">YOUTUBE</a>
        </motion.li>
      </ul>

      <motion.span
        initial={{ translateY: 10, opacity: 0 }}
        animate={{
          translateY: 0,
          opacity: 100,
          transition: {
            delay: 0.3 * 3,
            duration: 0.5,
          },
        }}
      >
        @2026
      </motion.span>
    </footer>
  );
}
