import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import { motion } from "framer-motion";
import { services } from "../data";
import ServiceCard from "../components/ServiceCard";
import { fadeUp, stagger, routeAnimation, fadeUpH2 } from "../animations";
import Head from "next/head";

const About = ({ endpoint }) => {
  console.log(endpoint);
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1"
      variants={routeAnimation}
      initial="anitial"
      animate="animate"
    >
      <Head>
        <title>Web Developer | portfolio | submit</title>
      </Head>
      <motion.h5
        className="my-3 font-medium"
        variants={fadeUpH2}
        initial="initial"
        animate="animate"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut lucabonasera2, Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        lucabonasera2
      </motion.h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <motion.h6
          className="my-3 text-xl font-bold tracking-wide "
          variants={fadeUpH2}
          initial="initial"
          animate="animate"
        >
          What I am Doing
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
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1"
              variants={fadeUp}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
/*
export const getServerSideProps = async (context:GetServerSidePropsContext) => {
  
  // Calculation
  const res = await fetch('http://localhost:3000/api/services')
  const data = await res.json()

  console.log('SERVER', services);
  console.log('data', data);
  
  return {
    props: {
      services: data,
    },
  }
}*/

export const getStaticProps = async (context: GetStaticPropsContext) => {
  // Calculation
  console.log("SERVER", process.env.VERCEL_URL);
  return {
    props: {
      endpoint: process.env.VERCEL_URL,
    },
  };
};
