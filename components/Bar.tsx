import { FunctionComponent } from "react";
import { ISkill } from "../type";
import { motion } from "framer-motion";

const Bar: FunctionComponent<{ data: ISkill }> = ({
  data: { Icon, level, name },
}) => {
  const barWidth = level;

  const variants = {
    initial: {
      width: "0%",
    },
    animate: {
      width: barWidth,
      transition: {
        duration: 0.6,
        type: 'spring',
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="my-3 text-white bg-gray-300 rounded-full dark:bg-dark-300">
      <motion.div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-600"
        style={{ width: level }}
        variants={variants}
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <Icon className="mr-3" />
        {name}
      </motion.div>
    </div>
  );
};

export default Bar;
