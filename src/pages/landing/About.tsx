import { motion } from "motion/react";
import { useState, type ReactNode } from "react";

type LabelHoverProps = {
  children: ReactNode;
  content: ReactNode;
};

function LabelHover(props: LabelHoverProps) {
  const [hovered] = useState(false);

  function handleOnMouseEnter() {}

  function handleOnMouseLeave() {}

  return (
    <>
      <div
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        className="mx-1 px-1 py-0.5 bg-gray-100 rounded-sm cursor-pointer hover:scale-95 transition-all inline-flex gap-2 w-fit items-center relative group z-10"
      >
        {props.children}
      </div>

      {hovered && (
        <div className="bg-white p-4 border border-black rounded-sm invisible group-hover:visible absolute z-20 top-full transition-all opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-3 w-80">
          {props.content}
        </div>
      )}
    </>
  );
}

export default function About() {
  return (
    <section className="px-4 lg:px-12 pt-28">
      <div className="space-y-12">
        <div>
          <motion.h2
            initial={{ translateY: 10, opacity: 0 }}
            animate={{
              translateY: 0,
              opacity: 100,
              transition: {
                delay: 0.3 * 0,
                duration: 0.5,
              },
            }}
            className="text-base font-normal text-gray-600"
          >
            [General]
          </motion.h2>
          <motion.span
            initial={{ translateY: 10, opacity: 0 }}
            animate={{
              translateY: 0,
              opacity: 100,
              transition: {
                delay: 0.3 * 1,
                duration: 0.5,
              },
            }}
            className="text-black mt-4 leading-relaxed"
          >
            I am a fresh graduate in Informatics Engineering. I enjoy conducting
            design research and programming. Besides working in IT (web
            programming), I am also interested in tinkering with electronics,
            such as{" "}
            <LabelHover
              content={
                <div>
                  <iframe src="https://en.wikipedia.org/wiki/Embedded_software" />
                </div>
              }
            >
              👨‍💻 Embedded System Programming
            </LabelHover>{" "}
            and{" "}
            <LabelHover
              content={
                <div>
                  <iframe src=" https://en.wikipedia.org/wiki/Printed_circuit_board." />
                </div>
              }
            >
              📟 PCB Design
            </LabelHover>
          </motion.span>
        </div>
        <div>
          <motion.h2
            initial={{ translateY: 10, opacity: 0 }}
            animate={{
              translateY: 0,
              opacity: 100,
              transition: {
                delay: 0.3 * 2,
                duration: 0.5,
              },
            }}
            className="text-base font-normal text-gray-600"
          >
            [Experiences]
          </motion.h2>
          <ul className="mt-4 space-y-4">
            <li>
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
                className="font-medium"
              >
                [1] 🚀 INTERN BACKEND DEVELOPER
              </motion.span>
              <motion.div
                initial={{ translateY: 10, opacity: 0 }}
                animate={{
                  translateY: 0,
                  opacity: 100,
                  transition: {
                    delay: 0.3 * 4,
                    duration: 0.5,
                  },
                }}
                className="mt-1 leading-relaxed"
              >
                During my studies, I had the opportunity to intern at{" "}
                <LabelHover
                  content={
                    <div>
                      <iframe src="https://itn.ac.id/" />
                    </div>
                  }
                >
                  🏫 PUSTIK ITN Malang
                </LabelHover>{" "}
                where I contributed to developing an academic system. My role
                was as a{" "}
                <LabelHover
                  content={
                    <div className="p-2 text-sm">
                      Handles API, database, and server logic
                    </div>
                  }
                >
                  ⚙️ Backend Developer
                </LabelHover>{" "}
                for the lecturer system using{" "}
                <LabelHover
                  content={
                    <div className="p-2 text-sm">JavaScript runtime</div>
                  }
                >
                  🟡 Node.js
                </LabelHover>
                ,{" "}
                <LabelHover
                  content={<div className="p-2 text-sm">Backend framework</div>}
                >
                  🚂 Express.js
                </LabelHover>
                , and{" "}
                <LabelHover
                  content={
                    <div className="p-2 text-sm">Relational database</div>
                  }
                >
                  🐘 PostgreSQL
                </LabelHover>
                .
              </motion.div>
            </li>

            <li>
              <motion.span
                initial={{ translateY: 10, opacity: 0 }}
                animate={{
                  translateY: 0,
                  opacity: 100,
                  transition: {
                    delay: 0.3 * 5,
                    duration: 0.5,
                  },
                }}
                className="font-medium"
              >
                [2] 💼 FREELANCE DEVELOPER AT DREAM SPACE
              </motion.span>
              <motion.div
                initial={{ translateY: 10, opacity: 0 }}
                animate={{
                  translateY: 0,
                  opacity: 100,
                  transition: {
                    delay: 0.3 * 6,
                    duration: 0.5,
                  },
                }}
                className="mt-1 leading-relaxed"
              >
                During my studies, I also worked as a freelancer at{" "}
                <LabelHover
                  content={
                    <div className="p-2 text-sm">Creative digital agency</div>
                  }
                >
                  🎨 Dream Space
                </LabelHover>
                . I worked on several projects including{" "}
                <LabelHover
                  content={
                    <div className="p-2 text-sm">Marketing websites</div>
                  }
                >
                  🌐 Landing Pages
                </LabelHover>
                ,{" "}
                <LabelHover
                  content={<div className="p-2 text-sm">Online store UI</div>}
                >
                  🛒 E-commerce Frontend
                </LabelHover>
                , and{" "}
                <LabelHover
                  content={
                    <div className="p-2 text-sm">Cross-platform apps</div>
                  }
                >
                  📱 Mobile Apps (Flutter)
                </LabelHover>
                . Technologies I used include{" "}
                <LabelHover
                  content={<div className="p-2 text-sm">React framework</div>}
                >
                  ⚡ Next.js
                </LabelHover>
                ,{" "}
                <LabelHover
                  content={<div className="p-2 text-sm">UI library</div>}
                >
                  ⚛️ React
                </LabelHover>
                ,{" "}
                <LabelHover
                  content={
                    <div className="p-2 text-sm">Progressive Web Apps</div>
                  }
                >
                  📦 PWA
                </LabelHover>
                , and{" "}
                <LabelHover
                  content={<div className="p-2 text-sm">Mobile framework</div>}
                >
                  🐦 Flutter
                </LabelHover>
                .
              </motion.div>
            </li>
          </ul>
        </div>
        <div>
          <motion.h2
            initial={{ translateY: 10, opacity: 0 }}
            animate={{
              translateY: 0,
              opacity: 100,
              transition: {
                delay: 0.3 * 7,
                duration: 0.5,
              },
            }}
            className="text-base font-normal text-gray-600"
          >
            [Education]
          </motion.h2>
          <ul className="mt-4 space-y-4">
            <li>
              <motion.span
                initial={{ translateY: 10, opacity: 0 }}
                animate={{
                  translateY: 0,
                  opacity: 100,
                  transition: {
                    delay: 0.3 * 8,
                    duration: 0.5,
                  },
                }}
                className="font-medium"
              >
                [1] 🎓 SMK 1 REJOTANGAN
              </motion.span>
              <motion.div
                initial={{ translateY: 10, opacity: 0 }}
                animate={{
                  translateY: 0,
                  opacity: 100,
                  transition: {
                    delay: 0.3 * 9,
                    duration: 0.5,
                  },
                }}
                className="mt-1 leading-relaxed"
              >
                I majored in{" "}
                <LabelHover
                  content={
                    <div className="p-2 text-sm">
                      Focus on circuits, microcontrollers, and hardware systems
                    </div>
                  }
                >
                  🔌 Electronics Engineering
                </LabelHover>{" "}
                during vocational high school. During this time, I achieved{" "}
                <LabelHover
                  content={
                    <div>
                      <iframe src="https://beritalima.com/smkn-1-rejotangan-sabet-juara-1-lks-tingkat-nasional-bidang-electronics/" />
                    </div>
                  }
                >
                  🏆 1st Place in the National Skills Competition (LKS) 2022
                </LabelHover>{" "}
                in the electronics category. I graduated with a final score of{" "}
                <LabelHover
                  content={
                    <div className="p-2 text-sm">Final graduation score</div>
                  }
                >
                  📊 90/100
                </LabelHover>
                .
              </motion.div>
            </li>

            <li>
              <motion.span
                initial={{ translateY: 10, opacity: 0 }}
                animate={{
                  translateY: 0,
                  opacity: 100,
                  transition: {
                    delay: 0.3 * 10,
                    duration: 0.5,
                  },
                }}
                className="font-medium"
              >
                [2] 🎓 INSTITUT TEKNOLOGI NASIONAL MALANG
              </motion.span>
              <motion.div
                initial={{ translateY: 10, opacity: 0 }}
                animate={{
                  translateY: 0,
                  opacity: 100,
                  transition: {
                    delay: 0.3 * 11,
                    duration: 0.5,
                  },
                }}
                className="mt-1 leading-relaxed"
              >
                I graduated in April 2026 with a{" "}
                <LabelHover
                  content={
                    <div className="p-2 text-sm">
                      Bachelor of Computer Science
                    </div>
                  }
                >
                  🎓 S.Kom (Informatics Engineering)
                </LabelHover>
                . I completed my studies in{" "}
                <LabelHover
                  content={
                    <div className="p-2 text-sm">
                      Accelerated study duration
                    </div>
                  }
                >
                  ⏱️ 3.5 years
                </LabelHover>{" "}
                with a GPA of{" "}
                <LabelHover
                  content={
                    <div className="p-2 text-sm">Grade Point Average</div>
                  }
                >
                  📈 3.85 / 4.00
                </LabelHover>
                . During my studies, I also served as{" "}
                <LabelHover
                  content={
                    <div className="p-2 text-sm">
                      Leading practical sessions and assisting students
                    </div>
                  }
                >
                  👨‍🏫 Practicum Coordinator
                </LabelHover>{" "}
                for{" "}
                <LabelHover
                  content={
                    <div className="p-2 text-sm">
                      Cross-platform mobile development framework
                    </div>
                  }
                >
                  📱 Mobile Programming (React Native)
                </LabelHover>
                .
              </motion.div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
