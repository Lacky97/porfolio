/* eslint-disable @next/next/no-img-element */
import { FunctionComponent } from "react";
import { IProject } from "../type";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, routeAnimation, stagger } from "../animations";
import { GrAppleAppStore } from "react-icons/gr";

const ProjectCard: FunctionComponent<{
  project: IProject;
  showDetail: null | number;
  setShowDetail: (id: null | number) => void;
}> = ({
  project: {
    id,
    name,
    description,
    image_path,
    deployed_url,
    github_url,
    appStore_url,
    playStore_url,
    category,
    key_tech,
  },
  showDetail,
  setShowDetail,
}) => {
  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className="object-cover rounded-xl"
        width="100"
        height="60"
        layout="responsive"
      />
      <p className="mt-2 font-extrabold text-center">{name}</p>
      {showDetail === id && (
        <div>
          <motion.div
            className="fixed top-0 bottom-0 left-0 right-0 w-screen h-screen transparent"
            variants={routeAnimation}
            initial="anitial"
            animate="animate"
            exit="exit"
            onClick={() => setShowDetail(null)}
          ></motion.div>
          <motion.div
            className="fixed z-10 p-3 bg-white-200 rounded-xl cardProjectSmall md:cardProject md:p-5 dark:text-white dark:bg-dark-200 modal shadow-colorInsta-500"
            variants={stagger}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.div
              variants={fadeUp}
              style={{ width: "90%" }}
              className="mx-auto"
            >
              <Image
                src={image_path}
                alt={description}
                width={4060}
                height={2117}
                layout="responsive"
                className=" rounded-2xl"
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <div className="flex items-center justify-center p-2 text-xl sm:p-3 sm:text-2xl">
                {name}
              </div>
            </motion.div>
            <motion.div variants={fadeUp}>
              <div className="flex items-center justify-center text-sm text-center sm:mx-24 sm:text-lg ">
                {description}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="bottom-0 flex items-center justify-center p-2 space-x-3 text-lg"
            >
              {key_tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-200 rounded-md dark:bg-dark-500"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            <motion.div
              className="flex justify-around w-full my-5 "
              variants={fadeUp}
            >
              {github_url !== "" && (
                <a
                  href={github_url}
                  className="flex items-center px-4 py-2 space-x-3 text-lg transition duration-500 transform bg-gray-200 rounded-lg md:scale-110 dark:bg-dark-500 hover:text-white-100 hover:bg-blue-700 hover:dark:bg-blue-700 hover:scale-110 md:hover:scale-125"
                >
                  <AiFillGithub /> <span>Github</span>
                </a>
              )}
              {appStore_url !== "" && (
                <a
                  href={appStore_url}
                  className="flex items-center px-4 py-2 space-x-3 text-lg transition duration-500 transform bg-gray-200 rounded-lg md:scale-110 dark:bg-dark-500 hover:text-white-100 hover:bg-blue-700 hover:dark:bg-blue-700 hover:scale-110 md:hover:scale-125"
                >
                  <GrAppleAppStore /> <span>Applestore</span>
                </a>
              )}
              {playStore_url !== "" && (
                <a
                  href={playStore_url}
                  className="flex items-center px-4 py-2 space-x-3 text-lg transition duration-500 transform bg-gray-200 rounded-lg md:scale-110 dark:bg-dark-500 hover:text-white-100 hover:bg-blue-700 hover:dark:bg-blue-700 hover:scale-110 md:hover:scale-125"
                >
                  <AiFillProject /> <span>Playstore</span>
                </a>
              )}
              {deployed_url !== "" && (
                <a
                  href={deployed_url}
                  className="flex items-center px-4 py-2 space-x-3 text-lg transition duration-500 transform bg-gray-200 rounded-lg md:scale-110 dark:bg-dark-500 hover:text-white-100 hover:bg-blue-700 hover:dark:bg-blue-700 hover:scale-110 md:hover:scale-125"
                >
                  <AiFillProject /> <span>Project</span>
                </a>
              )}
            </motion.div>
            <button
              onClick={() => {
                setShowDetail(null);
              }}
              className="absolute z-30 p-1 transition duration-500 transform rounded-full bg-grey-200 top-3 right-3 sm:top-5 sm:right-5 hover:bg-red-500 text-white-100"
            >
              <MdClose size={30} />
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
