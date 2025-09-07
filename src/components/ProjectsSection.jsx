import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { X } from "lucide-react";

const ProjectsSection = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", "Finance", "Research", "Leadership", "Tech"];

  const filteredProjects =
    filter === "All"
      ? portfolioData
      : portfolioData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects & Case Studies
        </motion.h2>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                filter === cat
                  ? "bg-blue-600 text-white shadow"
                  : "bg-slate-200 text-slate-700 hover:bg-slate-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              layoutId={`project-${idx}`}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition cursor-pointer overflow-hidden border"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-slate-800">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-600 mt-2 line-clamp-3">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              layoutId={`project-${portfolioData.indexOf(selectedProject)}`}
              className="bg-white rounded-2xl w-full sm:max-w-full md:max-w-5xl max-h-[90vh] overflow-y-auto shadow-xl border flex flex-col md:grid md:grid-cols-2 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left: Deskripsi */}
              <div className="p-6 md:p-8 flex flex-col">
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

              {/* Right: Gallery */}
              <div className="overflow-y-auto p-4 bg-slate-50">
                <div className="space-y-4">
                  {selectedProject.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${selectedProject.title} - ${i + 1}`}
                      className="rounded-lg w-full h-auto object-cover"
                    />
                  ))}
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-slate-500 hover:text-slate-900 transition-colors z-10 bg-white/80 rounded-full p-2 shadow"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
