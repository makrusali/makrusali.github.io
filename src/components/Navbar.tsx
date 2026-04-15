import MenuIcon from "@/icons/MenuIcon";
import { motion } from "motion/react";
import { useState } from "react";

type NavLinkProps = {
  url: string;
  title: string;
};

function NavLink({ title }: NavLinkProps) {
  return (
    <div className="group cursor-pointer">
      <span className="text-xl block">{title}</span>
      <span className="group-hover:w-full w-0 h-1 bg-black transition-all block"></span>
    </div>
  );
}

type Props = {
  onChangeMenu?: (menu: string) => void;
};

export default function Navbar({ onChangeMenu }: Props) {
  const [navOpen, setNavOpen] = useState(false);
  const menus = [
    {
      title: "About",
      url: "about",
    },
    {
      title: "Post",
      url: "post",
    },
    {
      title: "Resume",
      url: "resume",
    },
  ];

  function handleMenuClick(url: string) {
    setNavOpen(false);
    onChangeMenu?.(url);
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <header className="px-4 lg:px-12 h-16 flex flex-row items-center justify-between bg-white">
        <h1
          className="text-2xl font-semibold cursor-pointer no-select"
          onClick={() => handleMenuClick("home")}
        >
          Makrus Ali.
        </h1>

        <MenuIcon
          className={`w-8 h-8 lg:hidden block transition-all duration-300 cursor-pointer ${navOpen ? "rotate-180" : "rotate-0"}`}
          onClick={() => {
            setNavOpen(!navOpen);
          }}
        />

        <nav className="hidden lg:block">
          <ul className="flex gap-8 items-center">
            {menus.map((m, index) => (
              <motion.li
                key={String(index)}
                initial={{ opacity: 0, translateY: 10 }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.3,
                  },
                }}
                onClick={() => handleMenuClick(m.url)}
              >
                <NavLink title={m.title} url={m.url} />
              </motion.li>
            ))}
          </ul>
        </nav>
      </header>
      <div
        className={`fixed w-screen left-0 right-0 top-16 bottom-0 lg:hidden ${navOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <div
          className={`bg-white/95 backdrop-blur-sm duration-500 ${navOpen ? "h-full pointer-events-auto opacity-100" : "h-0 pointer-events-none opacity-80"} transition-all`}
        >
          <ul className={"flex flex-col gap-8 items-end px-8 pt-8 text-right"}>
            {menus.map((m, index) => (
              <li
                key={String(index)}
                className={`transition-all ${navOpen ? `opacity-100 pointer-events-auto delay-${300 + index * 200}` : `opacity-0 pointer-events-none delay-${500 - index * 200}`}`}
                onClick={() => handleMenuClick(m.url)}
              >
                <NavLink title={m.title} url={m.url} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
