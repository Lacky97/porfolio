/* eslint-disable @next/next/no-img-element */
import { FunctionComponent } from "react";
import { IProject } from "../type";
import { useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animations";

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
        className="cursor-pointer"
        onClick={() => setShowDetail(id)}
        width="300"
        height="250"
        layout="responsive"
      />
      <p className="my-2 text-center">{name}</p>
      {showDetail === id && (
        <motion.div
          className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-lg md:p-10 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100"
          variants={stagger}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div>
            <motion.div variants={fadeUp} className='border-4 border-gray-100'>
              <Image
                src={image_path}
                alt={description}
                width="300"
                height="100"
                layout="responsive"
              />
            </motion.div>
            <motion.div
              className="flex justify-center my-4 space-x-3"
              variants={fadeUp}
            >
              <a
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={deployed_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.h2
              variants={fadeUp}
              className="mb-3 text-xl font-medium md:text-2xl"
            >
              {name}
            </motion.h2>
            <motion.h3 variants={fadeUp} className="mb-3 font-medium">
              {description}
            </motion.h3>
            <motion.div variants={fadeUp}>
              {key_tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 round"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
          <button
            onClick={() => setShowDetail(null)}
            className="absolute p-1 rounded-full bg-grey-200 top-3 right-3 focue:outline-none dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectCard;
