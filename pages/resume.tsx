import { languages, tools } from "../data";
import Bar from "../components/Bar";
import { motion } from "framer-motion";
import { fadeUp, routeAnimation } from "../animations";
import Head from "next/head";

function Resume() {
  return (
    <motion.div
      className="px-6 "
      variants={routeAnimation}
      initial="anitial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>luca&apos;s blog</title>
      </Head>
      {/* education and exp */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Bachelor of Computer Science
            </h5>
            <p className="font-semibold">Universit√† degli Studi di Genova</p>
            <p className="my-3">Currently looking for a job</p>
          </div>
        </motion.div>
        <motion.div variants={fadeUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Junior Programmer</h5>
            <p className="font-semibold">Compat</p>
            <p className="my-3">
              Control and update of Mosaico (a management software for
              farmersControllo)
            </p>
          </div>
        </motion.div>
      </div>
      {/* Language and tool */}

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Frameworks</h5>
          <div className="my-2">
            {languages.map((language) => (
              <div key={language.name}>
                <Bar data={language} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Software</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <div key={tool.name}>
                <Bar data={tool} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Resume;
