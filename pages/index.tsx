import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import { motion } from "framer-motion";
import { services } from "../data";
import ServiceCard from "../components/ServiceCard";
import { fadeUp, stagger, routeAnimation, fadeUpH2 } from "../animations";
import Head from "next/head";

const About = ({ endpoint }) => {
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1"
      variants={routeAnimation}
      initial="anitial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>luca&apos;s blog</title>
      </Head>
      <motion.h5
        className="my-1 font-medium"
        variants={fadeUpH2}
        initial="initial"
        animate="animate"
      >
        After obtaining a bachelor&apos;s degree in computer science and an
        experience in a small company in my city, I&apos;m looking for a job in the
        branch of web or app development. During my university years I developed
        some personal projects using mainly python, javascript and dart as languages
        programming.
      </motion.h5>
      <motion.div
        className="flex-grow px-4 pb-2 mt-4 mb-4 bg-gray-100 shadow-custom-light dark:shadow-custom-dark dark:bg-dark-100 rounded-xl "
        variants={fadeUp}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.h6
          className="my-3 text-xl font-bold tracking-wide "
          variants={fadeUpH2}
          initial="initial"
          animate="animate"
        >
          What I am doing?
        </motion.h6>
        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="flex col-span-2 p-2 bg-gray-200 rounded-lg shadow-custom-light dark:shadow-custom-dark dark:bg-dark-200 md:col-span-1 "
              variants={fadeUp}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;

export const getStaticProps = async (context: GetStaticPropsContext) => {
  return {
    props: {
      endpoint: process.env.VERCEL_URL,
    },
  };
};
