import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="px-4 lg:px-12 pt-28">
      <motion.img
        initial={{
          opacity: 0,
          translateY: -100,
        }}
        animate={{
          opacity: 1,
          translateY: 0,
          transition: {
            duration: 0.3,
          },
        }}
        src="/public/makrusali.png"
        className="w-28 h-28 rounded-xl"
      />
      <h2 className="text-4xl font-semibold mt-5 leading-12">
        <motion.span
          initial={{ opacity: 0, translateY: 10 }}
          animate={{
            opacity: 1,
            translateY: 0,
            transition: {
              delay: 0.2,
              duration: 0.3,
            },
          }}
          className="inline-block"
        >
          Hello,
        </motion.span>{" "}
        <motion.span
          initial={{ opacity: 0, translateY: 10 }}
          animate={{
            opacity: 1,
            translateY: 0,
            transition: {
              delay: 0.2 * 2,
              duration: 0.3,
            },
          }}
          className="inline-block"
        >
          nice
        </motion.span>{" "}
        <motion.span
          initial={{ opacity: 0, translateY: 10 }}
          animate={{
            opacity: 1,
            translateY: 0,
            transition: {
              delay: 0.2 * 3,
              duration: 0.3,
            },
          }}
          className="inline-block"
        >
          to
        </motion.span>{" "}
        <motion.span
          initial={{ opacity: 0, translateY: 10 }}
          animate={{
            opacity: 1,
            translateY: 0,
            transition: {
              delay: 0.2 * 4,
              duration: 0.3,
            },
          }}
          className="inline-block"
        >
          meet
        </motion.span>{" "}
        <motion.span
          initial={{ opacity: 0, translateY: 10 }}
          animate={{
            opacity: 1,
            translateY: 0,
            transition: {
              delay: 0.2 * 5,
              duration: 0.3,
            },
          }}
          className="inline-block"
        >
          You,
        </motion.span>{" "}
        <motion.span
          initial={{ opacity: 0, translateY: 10 }}
          animate={{
            opacity: 1,
            translateY: 0,
            transition: {
              delay: 0.2 * 6,
              duration: 0.3,
            },
          }}
          className="inline-block"
        >
          i
        </motion.span>{" "}
        <motion.span
          initial={{ opacity: 0, translateY: 10 }}
          animate={{
            opacity: 1,
            translateY: 0,
            transition: {
              delay: 0.2 * 7,
              duration: 0.3,
            },
          }}
          className="inline-block"
        >
          am
        </motion.span>{" "}
        <motion.span
          initial={{ opacity: 0, translateY: 10 }}
          animate={{
            opacity: 1,
            translateY: 0,
            transition: {
              delay: 0.2 * 8,
              duration: 0.3,
            },
          }}
          className="relative group inline-block"
        >
          <div className="rotate-8 translate-x-2 inline-block relative z-0 group cursor-pointer">
            <span className="">Makrus Ali</span>
            <div className="flex gap-1">
              <span className="bg-black w-1 h-1"></span>
              <span className="group-hover:w-full w-5 h-1 bg-black transition-all block"></span>
            </div>
          </div>

          {/*<div className="bg-black w-100 h-100 absolute top-full left-full opacity-0 scale-110  delay-200 transition-all group-hover:opacity-100 group-hover:scale-100 rounded-xl"></div>*/}
        </motion.span>
      </h2>
      <motion.p
        initial={{ opacity: 0, translateY: 10 }}
        animate={{
          opacity: 1,
          translateY: 0,
          transition: {
            delay: 0.2 * 8,
            duration: 0.3,
          },
        }}
        className="text-xl text-gray-500 mt-4"
      >
        A developer based on East Java Indonesia
      </motion.p>
    </section>
  );
}
