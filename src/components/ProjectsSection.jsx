import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { projects } from "../data/portfolioData";

const CloseIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  // Ambil kategori unik (support multiple category per project)
  const categories = ["All", ...new Set(projects.flatMap((p) => p.category))];

  // Filter project sesuai kategori
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category.includes(activeCategory));

  return (
    <>
      <AnimatedSection
        id="projects"
        className="py-16 bg-white/70 backdrop-blur-sm"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-slate-800">
            Case Studies
          </h2>
          <p className="text-center text-slate-600 mb-8 max-w-2xl mx-auto">
            A selection of projects where I solved challenges and delivered
            measurable impact.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-slate-600 border-slate-300 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate-200/80 flex flex-col cursor-pointer group"
                  onClick={() => setSelectedProject(project)}
                  layoutId={`project-card-${index}`}
                  whileHover={{
                    y: -5,
                    boxShadow: "0px 20px 30px rgba(0,0,0,0.1)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="overflow-hidden h-48">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 text-sm flex-grow line-clamp-3">
                      {project.shortDescription}
                    </p>

                    {/* Category Tags */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.category.map((cat, i) => (
                        <span
                          key={i}
                          className="text-xs font-medium bg-slate-100 text-slate-600 px-3 py-1 rounded-full"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>

                    {/* Role & Impact preview */}
                    <div className="mt-3 text-xs text-slate-500">
                      <p>
                        <span className="font-semibold">Role:</span>{" "}
                        {project.myRole}
                      </p>
                      <p>
                        <span className="font-semibold">Impact:</span>{" "}
                        {project.impact}
                      </p>
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.techStack.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="text-xs text-slate-400">
                          +{project.techStack.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white rounded-2xl w-full sm:max-w-full md:max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl border flex flex-col md:grid md:grid-cols-2 relative"
              layoutId={`project-card-${projects.indexOf(selectedProject)}`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Deskripsi */}
              <div className="p-6 md:p-8 flex flex-col overflow-y-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-500 text-transparent bg-clip-text">
                  {selectedProject.title}
                </h2>
                <div className="space-y-4 text-sm text-slate-600">
                  <div>
                    <h4 className="font-bold text-slate-800">The Challenge</h4>
                    <p>{selectedProject.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">My Role</h4>
                    <p>{selectedProject.myRole}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">The Solution</h4>
                    <p>{selectedProject.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">The Impact</h4>
                    <p>{selectedProject.impact}</p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t">
                  <h4 className="font-bold text-slate-800 mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Galeri */}
              <div className="overflow-y-auto p-4 bg-slate-50">
                <div className="space-y-4">
                  {selectedProject.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${selectedProject.title} - image ${i + 1}`}
                      className="rounded-lg w-full h-auto object-cover"
                    />
                  ))}
                </div>
              </div>

              {/* Tombol Close */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-slate-500 hover:text-slate-900 transition-colors z-10 bg-white/50 rounded-full p-1"
              >
                <CloseIcon />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectsSection;
