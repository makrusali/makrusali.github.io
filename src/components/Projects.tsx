import ChevronDownIcon from "@/icons/ChevronDownIcon";
import Grid1x1Icon from "@/icons/Grid1x1Icon";
import Grid2x2Icon from "@/icons/Grid2x2Icon";
import Grid3x3Icon from "@/icons/Grid3x3Icon";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

type Props = {
  project: {
    title: string;
    informations: {
      title: string;
      description: string;
    }[];
    files: {
      name: string;
      url: string;
      type: string;
    }[];

    preferredGridColsInMobile?: number;
    preferredGridColsInDesktop?: number;
  };
};

function Project(props: Props) {
  const [selectedGrid, setSelectedGrid] = useState(3);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 64rem)");
    const handleChange = () => {
      setSelectedGrid(
        mediaQuery.matches
          ? props.project.preferredGridColsInMobile || 1
          : props.project.preferredGridColsInDesktop || 3,
      );
    };

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [
    props.project.preferredGridColsInDesktop,
    props.project.preferredGridColsInMobile,
  ]);

  return (
    <div className="">
      <div className="sticky top-16 bg-white py-4 z-10">
        <div className="flex items-center justify-between w-full">
          <motion.div
            initial={{ opacity: 0, translateY: 10 }}
            animate={{
              opacity: 1,
              translateY: 0,
              transition: {
                duration: 0.5,
                delay: 1.8,
              },
            }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <h3 className="font-normal text-lg text-ellipsis">
              {props.project.title}
            </h3>
            <ChevronDownIcon
              className={`w-6 h-6 transition-all ${open ? "rotate-0" : "-rotate-90 "}`}
            />
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, translateY: 10 }}
            animate={{
              opacity: 1,
              translateY: 0,
              transition: {
                duration: 0.5,
                delay: 1.8,
              },
            }}
            className="flex gap-2 items-center"
          >
            <li
              onClick={() => setSelectedGrid(1)}
              className={`p-1 cursor-pointer rounded-sm ${selectedGrid == 1 ? " fill-white text-black" : "fill-white text-gray-300"}`}
            >
              <Grid1x1Icon className="w-6 h-6" />
            </li>
            <li
              onClick={() => setSelectedGrid(2)}
              className={`p-1 cursor-pointer rounded-sm ${selectedGrid == 2 ? " fill-black" : "fill-gray-300"}`}
            >
              <Grid2x2Icon className="w-6 h-6" />
            </li>
            <li
              onClick={() => setSelectedGrid(3)}
              className={`p-1 hidden lg:inline-block cursor-pointer rounded-sm ${selectedGrid == 3 ? " fill-black" : "fill-gray-300"}`}
            >
              <Grid3x3Icon className="w-6 h-6" />
            </li>
          </motion.ul>
        </div>

        <motion.div
          className={`w-full leading-loose absolute top-16 bg-white text-black overflow-hidden transition-all [interpolate-size:allow-keywords] duration-300 ${open ? "h-fit" : "h-0"}`}
        >
          <ul className="pb-4 space-y-2">
            {props.project.informations.map((i, index) => (
              <li key={String(index)}>
                <p>{`[${index}]. ${i.title}`}</p>
                <p>{`${i.description}`}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.div
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`grid gap-3 w-full relative z-1 mt-3 ${selectedGrid == 1 ? "grid-cols-1" : selectedGrid == 2 ? "grid-cols-2" : selectedGrid == 3 ? "grid-cols-3" : "grid-cols-4"}`}
      >
        {props.project.files.map((f, index) => (
          <motion.div
            key={String(index)}
            initial={{ opacity: 0, translateY: 100 }}
            layout
            animate={{
              opacity: 1,
              translateY: 0,
              transition: {
                duration: 0.5,
                delay: index * 0.4 + 2,
              },
            }}
            className="w-full"
          >
            {f.type == "image" && (
              <img
                src={f.url}
                className="w-full rounded-md max-h-96 object-contain"
              />
            )}

            {f.type == "video" && (
              <video
                autoPlay={true}
                muted={true}
                loop={true}
                className="w-full rounded-md max-h-96 object-contain"
              >
                <source src={f.url} type="video/mp4" />
              </video>
            )}
            <p className="text-xs text-gray-500 mt-4 w-full text-wrap">
              {f.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "Sahabat SBA",
      informations: [
        {
          title: "ABOUT",
          description:
            "Sahabat SBA is a membership application for PT. Sehati Bangunan Abadi.",
        },
        {
          title: "ROLE",
          description:
            "Worked as a UI and mobile frontend developer using Flutter. Responsible for implementing REST API integration and building user interfaces.",
        },
      ],
      files: [
        {
          name: "DEMO.MP4",
          url: "/projects/sahabat-sba/DEMO.MP4",
          type: "video",
        },
        {
          name: "HOME_DESIGN.PNG",
          url: "/projects/sahabat-sba/HOME_DESIGN.PNG",
          type: "image",
        },
        {
          name: "MEMBERSHIP_DESIGN.PNG",
          url: "/projects/sahabat-sba/MEMBERSHIP_DESIGN.PNG",
          type: "image",
        },
        {
          name: "PRODUCT_CATALOG_DESIGN.PNG",
          url: "/projects/sahabat-sba/PRODUCT_CATALOG_DESIGN.PNG",
          type: "image",
        },
      ],
      preferredGridColsInMobile: 2,
      preferredGridColsInDesktop: 4,
    },

    {
      title: "KDM Attendance App",
      informations: [
        {
          title: "ABOUT",
          description:
            "An employee attendance application with face recognition functionality.",
        },
        {
          title: "ROLE",
          description:
            "Worked as a UI and frontend developer using React.js and a PWA approach. Implemented face detection with face-api.js and integrated REST APIs using a mobile-first design.",
        },
      ],
      files: [
        {
          name: "LOGIN_DESIGN.PNG",
          url: "/projects/kdm/LOGIN.png",
          type: "image",
        },
        {
          name: "HOME_DESIGN.PNG",
          url: "/projects/kdm/HOME.png",
          type: "image",
        },
        {
          name: "CONFIRM_ATTENDANCE_DESIGN.PNG",
          url: "/projects/kdm/CONFIRM_ATTENDANCE_DESIGN.png",
          type: "image",
        },
      ],
      preferredGridColsInMobile: 2,
      preferredGridColsInDesktop: 4,
    },

    {
      title: "Mildos Landing Page",
      informations: [
        {
          title: "ABOUT",
          description: "Mildos is an e-commerce vape store landing page.",
        },
        {
          title: "ROLE",
          description:
            "Designed and developed the landing page, including blog and page management features, using Tailwind CSS and Laravel.",
        },
      ],
      files: [
        {
          name: "DEMO.GIF",
          url: "/projects/mildos-landing/DEMO.gif",
          type: "image",
        },
        {
          name: "LANDING_PAGE.PNG",
          url: "/projects/mildos-landing/LANDING_PAGE.PNG",
          type: "image",
        },
      ],
      preferredGridColsInMobile: 1,
      preferredGridColsInDesktop: 2,
    },
    {
      title: "Mildos Ecommerce Vape Store",
      informations: [
        {
          title: "ABOUT",
          description: "An e-commerce platform for a vape store (Mildos).",
        },
        {
          title: "ROLE",
          description:
            "Worked as a UI and frontend developer. Designed and implemented the e-commerce interface using Tailwind CSS and Next.js.",
        },
      ],
      files: [
        {
          name: "HOME_SCREEN_DESIGN.PNG",
          url: "/projects/mildos-ecommerce/HOME_SCREEN_DESIGN.PNG",
          type: "image",
        },
        {
          name: "BRAND_LIST_DESIGN.PNG",
          url: "/projects/mildos-ecommerce/BRAND_LIST_DESIGN.PNG",
          type: "image",
        },
        {
          name: "CHECK_OUT_DESIGN.PNG",
          url: "/projects/mildos-ecommerce/CHECK_OUT_DESIGN.PNG",
          type: "image",
        },
        {
          name: "ORDER_DETAIL_DESIGN.PNG",
          url: "/projects/mildos-ecommerce/ORDER_DETAIL_DESIGN.PNG",
          type: "image",
        },
      ],
      preferredGridColsInMobile: 2,
      preferredGridColsInDesktop: 4,
    },
  ];

  return (
    <section className="px-4 lg:px-12 pt-28 space-y-12">
      {projects.map((p, index) => (
        <Project project={p} key={String(index)} />
      ))}
    </section>
  );
}
