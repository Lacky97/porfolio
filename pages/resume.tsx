import { languages, tools } from "../data";
import Bar from "../components/Bar";
import { motion } from "framer-motion";
import { fadeUp, routeAnimation } from "../animations";
import Head from "next/head";

function Resume() {
  return (
    <motion.div
      className="px-6 py-2"
      variants={routeAnimation}
      initial="anitial"
      animate="animate"
    >

<Head>
        <title>Web Developer | portfolio | submit</title>
      </Head>
      {/* education and exp */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeUp} initial="initial" animate="animate" exit="exit">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              COmputer Science Engenieering
            </h5>
            <p className="font-semibold">Acadmy of stocazzo</p>
            <p className="my-3">
              I am currently on stocazzo di sonno che mi ritrovo e sono le 3.20
              e questa cazzo di insonnio non mi permette di dormire
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Software Engenier di sta minchia
            </h5>
            <p className="font-semibold">preferirei non dirlo</p>
            <p className="my-3">
              non so nemmeno per quale motivo io abbia accettato
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
