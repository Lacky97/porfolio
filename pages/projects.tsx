import { projectsSite } from "../data";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import { useState } from "react";
import { Category } from "../type";
import { motion } from "framer-motion";
import { fadeUp, routeAnimation, stagger } from "../animations";

function Projects() {
  const [projectsState, setProjectsState] = useState(projectsSite);
  const [active, setActive] = useState("All");

  const [showDetail, setShowDetail] = useState<number|null>(null);

  const handleFilterCategory = (category: Category | "All") => {
    if (category === "All") {
      setProjectsState(projectsSite);
      setActive(category);
      return;
    }

    const newProjects = projectsSite.filter((project) =>
      project.category.includes(category)
    );
    setProjectsState(newProjects);
    setActive(category);
  };

  return (
    <motion.div
      variants={routeAnimation}
      initial="anitial"
      animate="animate"
      exit="exit"
    >
      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.div variants={fadeUp}>
          <ProjectsNavbar
            handleFilterCategory={handleFilterCategory}
            active={active}
          />
        </motion.div>

        <div className="px-5 py-2 overflow-y-scroll" style={{ height: "65vh" }}>
          <div className="relative grid grid-cols-12 gap-4 my-3 ">
            {projectsState.map((project) => (
              <motion.div
                key={project.name}
                className="col-span-12 p-2 bg-gray-200 rounded-xl sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
                variants={fadeUp}
              >
                <ProjectCard
                  project={project}
                  showDetail={showDetail}
                  setShowDetail={setShowDetail}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Projects;
